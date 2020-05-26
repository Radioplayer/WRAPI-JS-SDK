/**
 * All response types extend this - nothing should implement this directly
 */
export interface BaseResponse {
    meta: {};
    data: Array<{}>;
    error?: {
        statusCode: number | undefined;
        statusMessage: string | undefined;
    };
}

export interface BaseMeta {
    /**
     * Indicates whether the results in the corresponding data field are a paginated subset of all possible results
     */
    paginated: boolean;
    /**
     * Indicates that data is nested into collections of items on a per-station basis
     */
    nesting: boolean;
    /**
     * How many items are there in the overall result data set.
     */
    count: number;
    /**
     * Have cached values been returned?
     */
    fromCache: boolean;
    /**
     * When does the cache expire?
     */
    cacheExpiresAt: number | null;
    /**
     * Describes the data type returned
     */
    dataType:
        | "stations"
        | "onair"
        | "ondemand"
        | "schedule"
        | "recommendations"
        | "categories";
}

export interface PaginatedMeta extends BaseMeta {
    /**
     * For paginated data - how many items will be returned per page of results.
     */
    pageSize: number;
    /**
     * For paginated data - is this the first page of available information?
     */
    firstPage: boolean;
    /**
     * For paginated data - is this the last page of available information?
     */
    lastPage: boolean;
    /**
     * For paginated data - the total number of available pages of data.
     */
    totalPages: number;
    /**
     * For paginated data - the current page of results. Starts at 0
     */
    pageNumber: number;
}

export interface OnAirMeta extends BaseMeta {
    rpuid: string;
    country: string;
}

/**
 * An array of possible values for includes
 */
export type StationIncludes =
    | "ids"
    | "detail"
    | "bearers"
    | "social"
    | "phonetics"
    | "streams"
    | "images";

export interface StationParams {
    /**
     * Required if searching by geo, term or bearerId parameters.
     * Otherwise an optional 3 digit country ISO code to limit the size and speed of requests. Recommended.
     */
    country?: string;
    /**
     * Search for a station based on a bearerId.
     */
    bearerId?: string;
    /**
     * Search for a station with a uri-encoded search term.
     */
    search?: string;
    /**
     *  Search for a station with a comma-separated array of latitude and longitude (eg \[101,-97]).
     */
    geo?: number[];
    /**
     * Limit the fields that are returned in each station object. An array of possible values
     */
    include?: StationIncludes[];
    /**
     * At the moment, the only supported sort order is 'alphanumericKey'
     */
    sort?: "alphanumericKey";
}

export interface GetStationsByRpUidsParams {
    /**
     * Retrieves specific stations: an array of rpuid strings
     */
    rpuids: string[];
    /**
     * Limit the fields that are returned in each station object. An array of possible values
     */
    include?: StationIncludes[];
}

export interface OnAirParams {
    /**
     * Required. Specify the stations you would like onair information for, in a comma separated list of rpuids
     */
    rpuids: string[];
    /**
     * A boolean to indicate if you would like your response to include information about the next scheduled events, as well as those currently on air.
     * Defaults to false.
     */
    next?: boolean;
}

export interface StationScheduleParams {
    /**
     * Required. Specify the stations you would like schedule information for, in a comma separated list of rpuids.
     * Maximum 5 rpuids per request.
     */
    rpuids: string[];
    /**
     * The start time of the schedule in ISO8601 format. If from and to parameters are omitted, then the API returns the station’s schedule for the next 24 hours starting from the nearest hour before the current time.
     */
    from?: string | Date;
    /**
     * The start time of the schedule in ISO8601 format. If from and to parameters are omitted, then the API returns the station’s schedule for the next 24 hours starting from the nearest hour before the current time.
     */
    to?: string | Date;
    /**
     * To specify a particular page of results, add this parameter to your query
     */
    page?: number;
    /**
     * The number of results to return
     */
    size?: number;
}

export interface StationOndemandParams {
    /**
     * Required. Specify the station you would like on demand items to be returned for.
     * Currently only one rpuid per request
     */
    rpuid: string;
    /**
     * To specify a particular page of results, add this parameter to your query
     */
    page?: number;
    /**
     * The number of results to return (per page)
     */
    size?: number;
    /**
     * Required. Specify the series you would like on demand items to be returned for. Currently only one seriesId per request
     */
    seriesId?: string;
}

export interface MultiMedia {
    /**
     * The resource url.
     */
    url: string;
    /**
     * The resource mime type.
     */
    mimeValue: string;
    /**
     * The natural width of the resource
     */
    width: number;
    /**
     * The natural height of the resource
     */
    height: number;
    /**
     * Resource language
     */
    language: string;
    /**
     * The type of resource
     */
    type: string | null;
}

export interface Bearer {
    /** The id of the bearer */
    id: string;
    /**
     * Cost is a relative measure of the 'cost' of accessing a station over a given bearer.
     * 'Cost' is contextual: it could represent latency, cost of link, processing cost, etc. Lower is better.
     */
    cost: number;
    /** The mime value of this particular bearer */
    mimeValue?: string;
}

export interface Stream {
    streamSource: {
        /** The stream URL */
        url: string;
        /** The stream mime value */
        mimeValue: string;
    };
    audioFormat: string;
    /** Details about the stream bit rate  */
    bitrate: {
        target: number;
        variable: boolean;
    };
    streamRestriction: {
        /**
         * An ISO 639-1 two digit string representing the language
         */
        value: string;
        /**
         * Indicates whether the stream is allowed or denied from this language. Possible values are 'allow' or 'deny'.
         */
        relationship: "allow" | "deny";
    };
    /**
     * Only for ondemand items: the date from which the on demand item is available
     */
    availableStart: Date;
    /**
     * Only for ondemand items: the date until which the on demand item is available
     */
    availableStop: Date;
}
export interface Phonetics {
    /**
     * A unique ID for the phonetic record
     */
    id: string;
    /**
     * Specifies whether the format of this phonetic spelling is SSML or a fuzzy, pidgin-English type spelling. Values will be ssml or pidgin
     */
    type?: string;
    /** The phonetic spelling/pronunciation of the station in question  */
    value?: string;
    /** A list of any platforms that we know this phonetic record should be excluded from. For example, we know that SSML inputs are not supported on the Amazon Alexa, so any SSML inputs should include 'alexa' in this array  */
    exclude?: string[];
}

export interface StationEntry {
    /** Unique identifier representing a specific station. Unique across all countries. */
    rpuid: string;
    /** Station name */
    name: string;
    /** Station description.  */
    description: string;
    /** ISO number code of the station's country.  */
    country: string;
    /** Station assets, typically logo images.  */
    multimedia: MultiMedia[];
    /** Stream urls and information for this station.  */
    liveStreams: Stream[];
    /** An array of bearer IDs and information.  */
    bearers: Array<{ [key: string]: string }>;
    /** The ids of any linked social media accounts this station has.  */
    socialIds: string[];
    /** The letter/number to indicate where in an alphabetic list this station should be placed */
    alphanumericKey: string;
    /** Any phonetic SSML tags or spellings that can be used to help voice controlled devices recognise a station name as said by an end user  */
    phoneticInputs: Phonetics[];
    /** Any phonetic SSML tags or spellings that can be used to help voice controlled devices speak/pronounce a station name if required  */
    phoneticOutputs: Phonetics[];
}

/** StationResponse ***********************************************************/
export interface StationResponse extends BaseResponse {
    data: StationEntry[];
    meta: BaseMeta;
}

export interface Collection {
    /**
     * A unique ID for this item
     */
    id: string;
    /** The name of the item */
    name: string;
    /** The description of the item */
    description: string;
    /** The scheduled start and stop times the item will be on air.  */
    location: {
        scheduledStart: Date;
        scheduledStop: Date;
    };
    /**
     * More detailed, formatted information about song or programme events
     */
    mediaCredits: {
        /** Indicates the type of item the string in the value field is. */
        role: "artist";
        /** The schema through which metadata is formatted. This will be the EBU format, and will bre returned as urn:ebu  */
        scheme: string;
        value: string;
    };
}

export interface ScheduleMeta extends PaginatedMeta {
    /**
     * The subsets in this data array are organised into collections by station: an rpuid will be included for reference to indicate which station the corresponding data array relates to
     */
    rpuid: string;
    /** The subsets in this data array are organised into collections by station: this is the country the station is part of */
    country: string;
}

export interface NestedData {
    meta: ScheduleMeta | OnAirMeta;
    data: Collection[];
}

export interface OnAirResponse extends BaseResponse {
    meta: BaseMeta;
    /**
     * A collection of station's onair data.
     * Even if only one station is requested, results will still be organised into an array of objects, each object containing an array of results for said station's onair information
     */
    data: NestedData[];
}

export interface ScheduleResponse extends BaseResponse {
    meta: BaseMeta;
    /**
     * A collection of station's schedules. Even if only one station is requested, results will still be organised into an array of objects, each object containing an array of results for said station's schedule information.
     */
    data: NestedData[];
}

export interface ODData {
    /** A unique ID for the on demand item */
    id: string;
    /** The name of the on demand item.  */
    name: string;
    /** The description of the on demand item.  */
    description: string;
    /** The station this show belongs to.  */
    rpuid: string;
    /** The country this show's station is in  */
    country: string;
    /** Assets, typically show/album art images.  */
    multimedia: MultiMedia[];
    /** Stream urls and information for item.  */
    liveStreams: Stream[];
    /** The series this item is part of, if at all */
    series: { id: string };
}

export interface StationOnDemandResponse extends BaseResponse {
    meta: PaginatedMeta;
    data: ODData[];
}
