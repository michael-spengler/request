
export interface IOptions {
    mode: RequestMode
    cache: RequestCache
    credentials: RequestCredentials
    headers: HeadersInit
    redirect: RequestRedirect
    referrerPolicy: ReferrerPolicy
}

export const defaultOptions: IOptions = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}


type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors"
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached"
type RequestCredentials = "omit" | "same-origin" | "include"
type HeadersInit = Headers | string[][] | Record<string, string>
type RequestRedirect = "follow" | "error" | "manual"
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url"
