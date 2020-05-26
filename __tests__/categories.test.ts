import { getCategoriesUrl } from "../src/service/category";
import { CategoriesParams } from "../src/service/categoryTypes";

const baseUrl = "http://api.radioplayer.org/v2";

describe("categories endpoint", () => {
    it("generates correct categories request urls", () => {
        const params: CategoriesParams = { type: "live", country: "040" };
        expect(getCategoriesUrl(params, baseUrl)).toEqual(
            `${baseUrl}/categories/?type=live&country=040`
        );
    });
});
