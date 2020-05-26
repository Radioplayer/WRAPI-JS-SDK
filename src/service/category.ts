import { decorateUrl } from "../lib/utils";
import { flattenObject } from "../lib/utils";
import { CategoriesParams } from "./categoryTypes";
const categoriesEndpoint = "/categories";

export const getCategoriesUrl = (
    params: CategoriesParams,
    baseUrl: string | URL
): string => {
    const url = `${baseUrl}${categoriesEndpoint}/`;
    const queryParams = flattenObject(params);

    return decorateUrl(url, queryParams);
};
