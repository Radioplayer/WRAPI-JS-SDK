import { flattenObject, decorateUrl } from "../lib/utils";
import { OdParams } from "./ondemandTypes";

const onDemandEndPoint = "/ondemand";

export const getOnDemandUrl = (
    params: OdParams,
    baseUrl: string | URL
): string => {
    const url = `${baseUrl}${onDemandEndPoint}/`;
    const { odIds, ...rest } = params;
    if (odIds) {
        const ids = odIds?.join();
        return `${url}${ids}/`;
    }
    const queryParams = flattenObject(rest);
    return decorateUrl(url, queryParams);
};
