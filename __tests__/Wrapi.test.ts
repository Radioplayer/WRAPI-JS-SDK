import Wrapi from "../src/index";
import { key, keyId } from "../src/.env";
import {
    GetStationsByRpUidsParams,
    OnAirParams,
    OnAirResponse,
    StationScheduleParams,
    ScheduleResponse,
    StationOndemandParams
} from "../src/service/stationTypes";
import { RecommendationParams } from "../src/service/recommendationTypes";
import { OdParams } from "../src/service/ondemandTypes";
import { CategoriesParams } from "../src/service/categoryTypes";
import { getOnDemandUrl } from "../src/service/ondemand";

beforeEach(async () => {
    jest.setTimeout(10000);
});
describe("fetch requests from wrapi work as expected - stations", () => {
    const wrapi = new Wrapi({ keyId, key });

    it("fetches a single country", async () => {
        const stations = await wrapi.getStations({
            country: "040",
            include: ["ids"]
        });
        const stationsNo = stations.meta.count;
        expect(stationsNo).toBeGreaterThanOrEqual(50);
        expect(stations.data.length).toBeGreaterThanOrEqual(stationsNo);
        expect(stations.meta.dataType).toEqual("stations");
    });

    it("fetches a single station", async () => {
        const params: GetStationsByRpUidsParams = { rpuids: ["826342"] };
        const station = await wrapi.getStations(params);
        expect(station.data[0].name).toEqual("BBC Radio 2");
        expect(station.meta.dataType).toEqual("stations");
    });

    it("fetches on air data", async () => {
        const params: OnAirParams = {
            rpuids: ["8261004"]
        };
        const onAir: OnAirResponse = await wrapi.getOnAir(params);
        expect(onAir.data[0].data.length).toBeGreaterThanOrEqual(1);
        expect(onAir.meta.dataType).toEqual("onair");
    });

    it("fetches_schedule_information", async () => {
        const params: StationScheduleParams = {
            rpuids: ["826340"],
            from: "2020-05-04T14:48:00+0900",
            to: "2020-05-05T14:48:00+0900",
            page: 1,
            size: 2
        };
        const schedule: ScheduleResponse = await wrapi.getSchedule(params);
        expect(schedule.data[0].data.length).toBeGreaterThanOrEqual(1);
        expect(schedule.meta.dataType).toEqual("schedule");
        let error;
        try {
            await wrapi.getSchedule({
                rpuids: ["1", "2", "3", "4", "5", "6"]
            });
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(
            new Error(
                "Required. Specify the stations you would like schedule information for, in a comma separated list of rpuids. Maximum 5 rpuids per request."
            )
        );
    });

    it("fetches station ondemand information", async () => {
        const params: StationOndemandParams = {
            rpuid: "8261004",
            page: 50
        };
        const ondemand = await wrapi.getStationOndemand(params);
        expect(ondemand.data.length).toBeGreaterThanOrEqual(1);
        expect(ondemand.meta.dataType).toEqual("ondemand");
    });

    it("throws when params are wrong", async () => {
        let error;
        try {
            await wrapi.getStations({ geo: [1, 2] });
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(
            new Error("Country is required if using geo or search parameters.")
        );

        try {
            await wrapi.getStations({ search: "music" });
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(
            new Error("Country is required if using geo or search parameters.")
        );

        expect(
            await wrapi.getStations({ search: "music", country: "040" })
        ).toBeDefined();
    });
});

describe("fetch requests from wrapi work as expected - recommendation", () => {
    const wrapi = new Wrapi({ keyId, key });
    it("gets recommendation trending", async () => {
        const params: RecommendationParams = {
            factors: ["TRENDING"],
            onDemand: true,
            country: "040"
        };
        let recommendation = await wrapi.getRecommendation(params);
        expect(recommendation.data.length).toBeGreaterThanOrEqual(1);
        expect(recommendation.meta.dataType).toEqual("recommendations");
    });
    it("gets recommendation GEO data", async () => {
        const params: RecommendationParams = {
            factors: ["GEO"],
            latitude: 51.431019,
            longitude: -2.18579,
            country: "826"
        };
        let recommendation = await wrapi.getRecommendation(params);
        expect(recommendation.data.length).toBeGreaterThanOrEqual(1);
        expect(recommendation.meta.dataType).toEqual("recommendations");
    });
    it("gets recommendation musicmatch", async () => {
        const params: RecommendationParams = {
            factors: ["MUSICMATCH"],
            country: "276",
            artistPlayCounts: [{ artistName: "Madonna", playCount: 55 }],
            facebookArtists: ["Metallica"]
        };

        let recommendation = await wrapi.getRecommendation(params);
        expect(recommendation.data.length).toBeGreaterThanOrEqual(1);
        expect(recommendation.meta.dataType).toEqual("recommendations");
    });
});

describe("fetches on demand", () => {
    const wrapi = new Wrapi({ keyId, key });
    it("gets basic od data", async () => {
        const params: OdParams = { country: "040" };
        let demand = await wrapi.getOnDemand(params);
        expect(demand.data.length).toBeGreaterThanOrEqual(1);
        expect(demand.meta.dataType).toEqual("ondemand");
    });
    it("throws when params are wrong", async () => {
        let error;
        try {
            await wrapi.getOnDemand({ search: "something" });
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(
            new Error(
                "Country is required if using category or search parameters."
            )
        );

        try {
            await wrapi.getOnDemand({ category: "music" });
        } catch (e) {
            error = e;
        }
        expect(error).toEqual(
            new Error(
                "Country is required if using category or search parameters."
            )
        );
    });
});

describe("fetches categories", () => {
    const wrapi = new Wrapi({ keyId, key });
    it("gets basic od data", async () => {
        const params: CategoriesParams = { type: "live", country: "040" };
        let categories = await wrapi.getCategories(params);
        expect(categories.data.length).toBeGreaterThanOrEqual(1);
        expect(categories.meta.dataType).toEqual("categories");
    });
});
