import { BaseResponse, BaseMeta } from "./stationTypes";

export declare interface CategoryData {
    /** The name of the category */
    name: string;
    /** The href reference for the category */
    href: string;
}

export declare interface CategoryResponse extends BaseResponse {
    meta: BaseMeta;
    data: CategoryData[];
}

export declare interface CategoriesParams {
    /**
     * Required. Specifies whether you want live or ondemand data returned. These are the only two allowed values.
     */
    type: "live" | "ondemand";
    /**
     *  Required. Three digit country ISO code used to specify from which Radioplayer region we want to receive category lists.
     */
    country: string;
}
