import { flattenObject, decorateUrl } from "../lib/utils";
import {
    StationParams,
    GetStationsByRpUidsParams,
    OnAirParams,
    StationScheduleParams,
    StationOndemandParams,
} from "./stationTypes";

const stationsEndpoint = "/stations";

export const getStationsRequestUrl = (
    params: StationParams,
    baseUrl: string | URL
): string => {
    const url = `${baseUrl}${stationsEndpoint}/`;
    if (!Object.keys(params).length) return url;

    const paramArray = flattenObject(params);
    return decorateUrl(url, paramArray);
};

export const getStationsByRpUidsRequestUrl = (
    params: GetStationsByRpUidsParams,
    baseUrl: string | URL
): string => {
    const url = `${baseUrl}${stationsEndpoint}/`;
    const { rpuids, ...include } = params;
    const rpuidStrings = rpuids.join();

    if (params.include?.length === 0) {
        return `${url}${rpuidStrings}`;
    }
    const includeArray = flattenObject(include);

    return decorateUrl(`${url}${rpuidStrings}`, includeArray);
};

export const getStationsOnAirUrl = (
    params: OnAirParams,
    baseUrl: string | URL
): string => {
    const { rpuids, next } = params;
    const rpuidStrings = rpuids.join();
    const url = `${baseUrl}${stationsEndpoint}/${rpuidStrings}/onair`;

    if (!next) {
        return url;
    }
    return `${url}/?next=true`;
};

export const getStationsScheduleUrl = (
    params: StationScheduleParams,
    baseUrl: string | URL
): string => {
    const { rpuids, ...rest } = params;
    const rpuidStrings = rpuids.join();
    const url = `${baseUrl}${stationsEndpoint}/${rpuidStrings}/schedule`;

    const restString = flattenObject(rest);

    return decorateUrl(url, restString);
};

export const getStationOnDemandUrl = (
    params: StationOndemandParams,
    baseUrl: string | URL
): string => {
    const { rpuid, seriesId, ...rest } = params;
    const seriesPath = seriesId ? `/${seriesId}` : "";
    const url = `${baseUrl}${stationsEndpoint}/${rpuid}/ondemand${seriesPath}`;

    const restString = flattenObject(rest);
    return decorateUrl(url, restString);
};
