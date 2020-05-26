import {
    buildQuery,
    decorateUrl,
    flattenObject,
    formatDate,
} from "../src/lib/utils";
import { StationParams } from "../src/service/stationTypes";
describe("utils are working as expected", () => {
    it("constructs correct url param string", () => {
        expect(buildQuery([])).toEqual("");
        expect(buildQuery([["foo", "bar"]])).toEqual("foo=bar");
        expect(
            buildQuery([
                ["foo", "bar"],
                ["baz", "qux"],
            ])
        ).toEqual("foo=bar&baz=qux");
    });

    it("decorates the url with correct characters", () => {
        expect(decorateUrl("example.com", [["foo", "bar"]])).toEqual(
            "example.com"
        );
        expect(decorateUrl("http://example.com", [])).toEqual(
            "http://example.com"
        );
        expect(decorateUrl("http://example.com", [["foo", "bar"]])).toEqual(
            "http://example.com/?foo=bar"
        );
        expect(
            decorateUrl("https://example.com", [
                ["foo", "bar"],
                ["baz", "qux"],
            ])
        ).toEqual("https://example.com/?foo=bar&baz=qux");
    });

    it("flattens objects into strings arrays", () => {
        expect(flattenObject({})).toEqual([]);
        expect(flattenObject({ foo: "bar" })).toEqual([["foo", "bar"]]);
        expect(flattenObject({ foo: "bar", baz: "qux" })).toEqual([
            ["foo", "bar"],
            ["baz", "qux"],
        ]);
        expect(
            flattenObject({ foo: "bar", baz: "qux", quux: [1, 2, 3] })
        ).toEqual([
            ["foo", "bar"],
            ["baz", "qux"],
            ["quux", "1,2,3"],
        ]);
        expect(
            flattenObject({
                foo: "bar",
                baz: "qux",
                quux: ["one", "two", "three"],
            })
        ).toEqual([
            ["foo", "bar"],
            ["baz", "qux"],
            ["quux", "one,two,three"],
        ]);
    });

    it("generates an url query", () => {
        const params: StationParams = {
            country: "040",
            include: ["detail", "streams"],
        };
        const flattenedParams = flattenObject(params);

        expect(decorateUrl("https://example.com/", flattenedParams)).toEqual(
            "https://example.com/?country=040&include=detail%2Cstreams"
        );
    });
});

describe("the date formatter", () => {
    it("formats the date", () => {
        expect(formatDate("2020-05-04T18:21:55.000Z")).toEqual(
            "2020-05-04T19:21:55+01:00"
        );
        expect(formatDate("2020-05-04")).toEqual("2020-05-04T01:00:00+01:00");
        expect(formatDate(new Date("2020-05-04"))).toEqual(
            "2020-05-04T01:00:00+01:00"
        );
    });
    it("throws when wrong date is passed", () => {
        const wrong = () => formatDate("this is not a valid date");
        expect(wrong).toThrow();
    });
});
