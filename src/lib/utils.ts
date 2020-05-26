export const buildQuery = (params: string[][]): string => {
    if (!params) return "";
    return params
        .map((tuple) => tuple.map(encodeURIComponent).join("="))
        .join("&");
};

export const decorateUrl = (url: string, params: string[][] = []) => {
    const result = url.match(/(https?:)?\/\/(.+)/);
    if (!result || result.length < 3 || params.length === 0) {
        return url;
    }
    const domain = result[2];
    let char = "/?";

    if (domain.endsWith("/")) {
        char = "?";
    }
    if (domain.includes("?")) {
        char = "&";
    }
    const query = buildQuery(params);
    return `${url}${char}${query}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flattenObject = (object: any): string[][] => {
    if (!object) return [];

    const keys = Object.keys(object);

    if (keys.length === 0) return [];

    const response = keys.map((key) => {
        return [`${key}`, `${object[key]}`];
    });

    return response;
};

/**
 *
 * @param date - string or Date
 * @returns a date string formatted that is understood by wrapi
 */
export const formatDate = (date: string | Date): string => {
    let newDate;
    const aDate = new Date(date);

    // if (aDate.getTime() !== aDate.getTime()) throw new Error("Invalid Date");
    if (isNaN(aDate.getTime())) throw new Error("Invalid Date");

    const timeZone = -aDate.getTimezoneOffset(),
        dif = timeZone >= 0 ? "+" : "-",
        pad = function (num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? "0" : "") + norm;
        };
    newDate =
        aDate.getFullYear() +
        "-" +
        pad(aDate.getMonth() + 1) +
        "-" +
        pad(aDate.getDate()) +
        "T" +
        pad(aDate.getHours()) +
        ":" +
        pad(aDate.getMinutes()) +
        ":" +
        pad(aDate.getSeconds()) +
        dif +
        pad(timeZone / 60) +
        ":" +
        pad(timeZone % 60);
    return newDate;
};
