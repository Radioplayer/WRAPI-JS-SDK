import { getRecommendationUrl } from "../src/service/recommendation";
import { RecommendationParams } from "../src/service/recommendationTypes";

const baseUrl = "http://api.radioplayer.org/v2";

describe("recommendations endpoint", () => {
    it("generates correct recommendation request urls", () => {
        const params: RecommendationParams = {
            factors: ["GEO"],
        };
        expect(getRecommendationUrl(params, baseUrl)).toEqual(
            `${baseUrl}/recommendations/`
        );
        params.country = "826";
        expect(getRecommendationUrl(params, baseUrl)).toEqual(
            `${baseUrl}/recommendations/?country=826`
        );
    });
});
