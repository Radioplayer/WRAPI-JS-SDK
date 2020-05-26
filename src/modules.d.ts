declare module "http-signature" {
    import { ClientRequest } from "http";
    export function sign(
        req: ClientRequest,
        { key, keyId }: { key: string; keyId: string }
    ): ClientRequest;
}
