import { StationEntry, ODData, BaseResponse, BaseMeta } from "./stationTypes";

export declare interface RecommendationData {
    type: "STATION" | "ONDEMAND";
    factors: Factors[];
}

export declare interface RecommendedStation
    extends RecommendationData,
        StationEntry {}
export declare interface RecommendedOD extends RecommendationData, ODData {}

export declare interface RecommendationResponse extends BaseResponse {
    meta: BaseMeta;
    data: Array<RecommendedStation | RecommendedOD>;
}

export declare type Factors = "GEO" | "TRENDING" | "AFFINITY" | "MUSICMATCH";

export declare interface ArtistPlay {
    artistName: string;
    playCount: number;
}

export declare interface RecommendationParams {
    /**
     * What factors do you want to influence your recommendations? Multiple factors can be used. Possible values are "GEO", "TRENDING", "AFFINITY", and "MUSICMATCH"
     */
    factors: Factors[];
    /**
     * Three digit country ISO code used to specify from which Radioplayer region we want to receive recommendations
     */
    country?: string;
    /**
     * A station rpuid, typically the last listened or currently listened to station.
     * This influences recommendations when the AFFINITY factor is included
     */
    rpuid?: string;
    /**
     * Recommendations can be tailored based on the user's location when the GEO factor is included - an optional latitude and longitude can be included in the body
     */
    latitude?: number;
    /**
     * Recommendations can be tailored based on the user's location when the GEO factor is included - an optional latitude and longitude can be included in the body
     */
    longitude?: number;
    /**
     * An array of objects each containing an artistName string, and a corresponding playCount integer. Used in conjunction with the MUSICMATCH parameter.
     */
    artistPlayCounts?: ArtistPlay[];
    /**
     * An array of artist names that when used in conjunction with the MUSICMATCH parameter can help tailor recommendations.
     */
    facebookArtists?: string[];
    /**
     * If true, on demand items will be included in the recommendations. Default is false.
     */
    onDemand?: boolean;
}
