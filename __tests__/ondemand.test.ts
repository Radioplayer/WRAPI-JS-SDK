import { getOnDemandUrl } from "../src/service/ondemand";
import { OdParams } from "../src/service/ondemandTypes";

const baseUrl = "http://api.radioplayer.org/v2";

describe("ondemand endpoint", () => {
    it("generates correct ondemand request urls", () => {
        const params: OdParams = { country: "826" };
        expect(getOnDemandUrl(params, baseUrl)).toEqual(
            `${baseUrl}/ondemand/?country=826`
        );
        params.search = "something";
        expect(getOnDemandUrl(params, baseUrl)).toEqual(
            `${baseUrl}/ondemand/?country=826&search=something`
        );
        params.odIds = ["odid1"];
        expect(getOnDemandUrl(params, baseUrl)).toEqual(
            `${baseUrl}/ondemand/odid1/`
        );
        params.odIds = ["odid1", "odid2"];
        expect(getOnDemandUrl(params, baseUrl)).toEqual(
            `${baseUrl}/ondemand/odid1,odid2/`
        );
    });
});
