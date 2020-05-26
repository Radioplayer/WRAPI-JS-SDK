import { makeSignedRequest } from "./request/httpRequests";
import {
    getStationsByRpUidsRequestUrl,
    getStationsRequestUrl,
    getStationsOnAirUrl,
    getStationsScheduleUrl,
    getStationOnDemandUrl
} from "./service/station";
import { getRecommendationUrl } from "./service/recommendation";
import { getOnDemandUrl } from "./service/ondemand";
import { getCategoriesUrl } from "./service/category";
import { CategoriesParams, CategoryResponse } from "./service/categoryTypes";
import {
    StationParams,
    GetStationsByRpUidsParams,
    StationResponse,
    OnAirParams,
    OnAirResponse,
    StationScheduleParams,
    ScheduleResponse,
    StationOndemandParams,
    StationOnDemandResponse
} from "./service/stationTypes";
import {
    RecommendationParams,
    RecommendationResponse
} from "./service/recommendationTypes";
import { OdParams } from "./service/ondemandTypes";
import { formatDate } from "./lib/utils";

export interface WrapiConstructor {
    key: string;
    keyId: string;
    baseURL?: string | URL;
}
export default class Wrapi {
    /**
     * The keys (a pem file and a corresponding key ID) can be obtained from Radioplayer by emailing `contact@radioplayer.co.uk`
     */
    private keys: { keyId: string; key: string };
    private baseURL: string | URL;

    public constructor({
        key,
        keyId,
        baseURL = "https://api.radioplayer.org/v2"
    }: WrapiConstructor) {
        this.baseURL = baseURL;
        const keyBuff = Buffer.from(key, "base64");
        const theKey = keyBuff.toString("ascii");
        this.keys = {
            keyId: keyId,
            key: theKey
        };
    }

    private createRequest = (requestUrl: string) => ({
        url: requestUrl,
        keys: this.keys
    });

    /**
     * Retrieve information about stations. An entire list of stations can be returned, or query parameters can be added to filter the results.
     * You may also use the same endpoint to retrieve station information for one or more stations.
     */
    public getStations = (
        params: StationParams | GetStationsByRpUidsParams
    ): Promise<StationResponse> => {
        let requestUrl = "";
        const { country, geo, search } = params as StationParams;
        if ((geo || search) && !country) {
            throw new Error(
                "Country is required if using geo or search parameters."
            );
        }

        //if params contains rpuid we need to construct a slightly different url
        if (params.hasOwnProperty("rpuids")) {
            requestUrl = getStationsByRpUidsRequestUrl(
                (params as unknown) as GetStationsByRpUidsParams,
                this.baseURL
            );
        } else {
            requestUrl = getStationsRequestUrl(params, this.baseURL);
        }

        return makeSignedRequest<StationResponse>(
            this.createRequest(requestUrl)
        );
    };

    /**
     * Retrieve on air, now-playing events, such as programs or songs.
     * You can specify one or multiple stations to request information from, and can optionally retrieve any events that are playing next.
     */
    public getOnAir = async (params: OnAirParams): Promise<OnAirResponse> => {
        const { rpuids } = params;
        if (!rpuids)
            throw new Error(
                "rpuids are required. Specify the stations you would like onair information for, in a comma separated list of rpuids"
            );
        const requestUrl = getStationsOnAirUrl(params, this.baseURL);

        return makeSignedRequest<OnAirResponse>(this.createRequest(requestUrl));
    };

    /**
     * Retrieve station schedules. You can specify one or multiple stations to request information from, up to a maximum of five rpuids per request.
     * Results will be organised by station, and each station's results will be paginated.
     */
    public getSchedule = async (
        params: StationScheduleParams
    ): Promise<ScheduleResponse> => {
        const requestUrl = getStationsScheduleUrl(params, this.baseURL);
        const { rpuids, from, to } = params;

        if (!rpuids || rpuids.length > 5)
            throw new Error(
                "Required. Specify the stations you would like schedule information for, in a comma separated list of rpuids. Maximum 5 rpuids per request."
            );
        if ((from && !to) || (to && !from)) {
            throw new Error("You need to specify both from and to");
        }

        if (from && to) {
            params.from = formatDate(from);
            params.to = formatDate(to);
        }

        return makeSignedRequest<ScheduleResponse>(
            this.createRequest(requestUrl)
        );
    };

    /**
     * Returns a paginated subset of on demand items for a given station. Results are returned in chronological order, the most recent first.
     * You may also provide the station rpuid for the series you are requesting.
     */
    public getStationOndemand = async (
        params: StationOndemandParams
    ): Promise<StationOnDemandResponse> => {
        const { rpuid } = params;
        if (!rpuid)
            throw new Error(
                "Required. Specify the station you would like on demand items to be returned for. Currently only one rpuid per request"
            );
        const requestUrl = getStationOnDemandUrl(params, this.baseURL);

        return makeSignedRequest(this.createRequest(requestUrl));
    };

    /**
     * Retrieve recommendations of stations and (optionally) ondemand items. A default request will just return recommended stations; an optional onDemand paramter can be included in the body to include onDemand items in the response.
     */
    public getRecommendation = async (
        params: RecommendationParams
    ): Promise<RecommendationResponse> => {
        const requestUrl = getRecommendationUrl(params, this.baseURL);
        const { country, ...body } = params;

        return makeSignedRequest({
            ...this.createRequest(requestUrl),
            method: "POST",
            requestBody: JSON.stringify(body)
        });
    };

    /**
     * Retrieves ondemand items. These can be as a result of a text search, a search-by-country, or a search-by-category.
     * Also retrieves information about particular, specified ondemand items, indicated by the odIds parameter.
     */
    public getOnDemand = async (
        params: OdParams
    ): Promise<StationOnDemandResponse> => {
        const { country, category, search } = params;
        if ((category || search) && !country) {
            throw new Error(
                "Country is required if using category or search parameters."
            );
        }
        const requestUrl = getOnDemandUrl(params, this.baseURL);

        return makeSignedRequest(this.createRequest(requestUrl));
    };

    /**
     * Returns a list of category names and hrefs for ondemand or live data.
     */
    public getCategories = async (
        params: CategoriesParams
    ): Promise<CategoryResponse> => {
        const requestUrl = getCategoriesUrl(params, this.baseURL);

        return makeSignedRequest(this.createRequest(requestUrl));
    };
}
