import https from "https";
import * as httpSignature from "http-signature";
import { BaseResponse } from "../service/stationTypes";

interface KeyAndId {
    key: string;
    keyId: string;
}

export interface MakeSignedRequestParams {
    url: string | URL;
    keys: KeyAndId;
    method?: "GET" | "POST";
    requestBody?: string;
}

export const makeSignedRequest = <T extends BaseResponse>({
    url,
    keys,
    method = "GET",
    requestBody = ""
}: MakeSignedRequestParams): Promise<T> => {
    const { key, keyId } = keys;
    return new Promise((resolve, reject) => {
        // create Request with event listeners
        const req = https.request(url, (res) => {
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", () => {
                if (res.statusCode !== 200) {
                    resolve(({
                        data: [],
                        meta: {},
                        error: {
                            statusCode: res.statusCode,
                            statusMessage: res.statusMessage
                        }
                    } as unknown) as T);
                } else {
                    resolve(JSON.parse(body));
                }
            });

            res.on("error", (e) => {
                reject(e);
            });
        });

        req.method = method;

        if (requestBody) {
            req.setHeader("Content-Type", "application/json");
            req.setHeader("Content-Length", requestBody.length);
        }

        // sign the Request
        httpSignature.sign(req, {
            key: key,
            keyId: keyId
        });
        // trigger
        req.write(requestBody);
        req.end();
    });
};
