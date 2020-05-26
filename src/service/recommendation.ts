import { decorateUrl } from "../lib/utils";
import { RecommendationParams } from "./recommendationTypes";
const recommendationEndpoint = "/recommendations";

export const getRecommendationUrl = (
    params: RecommendationParams,
    baseUrl: string | URL
): string => {
    const url = `${baseUrl}${recommendationEndpoint}/`;
    if (!Object.keys(params).length) return url;

    if (params.country)
        return decorateUrl(url, [["country", `${params.country}`]]);

    return decorateUrl(url);
};
