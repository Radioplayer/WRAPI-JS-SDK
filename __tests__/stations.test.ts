import {
    getStationsRequestUrl,
    getStationsByRpUidsRequestUrl,
    getStationsOnAirUrl,
    getStationsScheduleUrl,
    getStationOnDemandUrl,
} from "../src/service/station";

const baseUrl = "http://api.radioplayer.org/v2";
describe("stations endpoint", () => {
    it("generates correct stations request urls", () => {
        expect(getStationsRequestUrl({}, baseUrl)).toEqual(
            "http://api.radioplayer.org/v2/stations/"
        );
        expect(getStationsRequestUrl({ country: "040" }, baseUrl)).toEqual(
            "http://api.radioplayer.org/v2/stations/?country=040"
        );
        expect(
            getStationsRequestUrl({ country: "040", bearerId: "abc" }, baseUrl)
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/?country=040&bearerId=abc"
        );
        expect(
            getStationsRequestUrl(
                {
                    country: "040",
                    bearerId: "abc",
                    include: ["images", "detail"],
                },
                baseUrl
            )
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/?country=040&bearerId=abc&include=images%2Cdetail"
        );
    });

    it("generates correct station request by rpuid url", () => {
        expect(
            getStationsByRpUidsRequestUrl({ rpuids: ["826300"] }, baseUrl)
        ).toEqual("http://api.radioplayer.org/v2/stations/826300");
        expect(
            getStationsByRpUidsRequestUrl(
                { rpuids: ["826300", "826301"] },
                baseUrl
            )
        ).toEqual("http://api.radioplayer.org/v2/stations/826300,826301");
        expect(
            getStationsByRpUidsRequestUrl(
                {
                    rpuids: ["826300", "826301"],
                    include: [],
                },
                baseUrl
            )
        ).toEqual("http://api.radioplayer.org/v2/stations/826300,826301");
        expect(
            getStationsByRpUidsRequestUrl(
                {
                    rpuids: ["826300", "826301"],
                    include: ["images", "detail"],
                },
                baseUrl
            )
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826300,826301/?include=images%2Cdetail"
        );
    });

    it("generates correct on air url", () => {
        expect(getStationsOnAirUrl({ rpuids: ["826300"] }, baseUrl)).toEqual(
            "http://api.radioplayer.org/v2/stations/826300/onair"
        );
        expect(
            getStationsOnAirUrl({ rpuids: ["826300", "826301"] }, baseUrl)
        ).toEqual("http://api.radioplayer.org/v2/stations/826300,826301/onair");
        expect(
            getStationsOnAirUrl({ rpuids: ["826300"], next: true }, baseUrl)
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826300/onair/?next=true"
        );
    });

    it("generates correct station schedule url", () => {
        expect(getStationsScheduleUrl({ rpuids: ["826300"] }, baseUrl)).toEqual(
            "http://api.radioplayer.org/v2/stations/826300/schedule"
        );
        expect(
            getStationsScheduleUrl({ rpuids: ["826300", "826301"] }, baseUrl)
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826300,826301/schedule"
        );
        expect(
            getStationsScheduleUrl({ rpuids: ["826300"], page: 2 }, baseUrl)
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826300/schedule/?page=2"
        );
        expect(
            getStationsScheduleUrl(
                { rpuids: ["826300"], page: 2, size: 5 },
                baseUrl
            )
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826300/schedule/?page=2&size=5"
        );
    });

    it("generates correct station ondemand url", () => {
        expect(getStationOnDemandUrl({ rpuid: "826100" }, baseUrl)).toEqual(
            "http://api.radioplayer.org/v2/stations/826100/ondemand"
        );
        expect(
            getStationOnDemandUrl(
                {
                    rpuid: "826100",
                    seriesId:
                        "826odp:/crid://absoluteradio.co.uk/podcasts/90222",
                },
                baseUrl
            )
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826100/ondemand/826odp:/crid://absoluteradio.co.uk/podcasts/90222"
        );
        expect(
            getStationOnDemandUrl(
                {
                    rpuid: "826100",
                    seriesId:
                        "826odp:/crid://absoluteradio.co.uk/podcasts/90222",
                    page: 2,
                    size: 1,
                },
                baseUrl
            )
        ).toEqual(
            "http://api.radioplayer.org/v2/stations/826100/ondemand/826odp:/crid://absoluteradio.co.uk/podcasts/90222/?page=2&size=1"
        );
    });
});
