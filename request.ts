import { IOptions, defaultOptions } from "./interfaces-and-constants.ts"

export class Request {

    static async get(url: string, options: IOptions = defaultOptions): Promise<any> {
        let response: any = await fetch(url, {
            method: 'GET',
            mode: options.mode,
            cache: options.cache,
            credentials: options.credentials,
            headers: options.headers,
            redirect: options.redirect,
            referrerPolicy: options.referrerPolicy,
        })

        let result = await response.json()

        return result
    }


    static async post(url: string, data: any, options: IOptions = defaultOptions): Promise<any> {
        const response = await fetch(url, {
            method: 'POST',
            mode: options.mode,
            cache: options.cache,
            credentials: options.credentials,
            headers: options.headers,
            redirect: options.redirect,
            referrerPolicy: options.referrerPolicy,
            body: JSON.stringify(data)
        })

        let result: any
        try {
            result = await response.json()
        } catch (error) {
            console.log("response seem not to be in JSON format")

            result = {}
        }

        return result
    }


    static async delete(url: string, options: IOptions = defaultOptions): Promise<any> {
        let response: any = await fetch(url, {
            method: 'DELETE',
            mode: options.mode,
            cache: options.cache,
            credentials: options.credentials,
            headers: options.headers,
            redirect: options.redirect,
            referrerPolicy: options.referrerPolicy,
        })

        let result: any = await response.json()

        return result
    }


    static async put(url: string, data: any, options: IOptions = defaultOptions): Promise<any> {
        const response: any = await fetch(url, {
            method: 'PUT',
            mode: options.mode,
            cache: options.cache,
            credentials: options.credentials,
            headers: options.headers,
            redirect: options.redirect,
            referrerPolicy: options.referrerPolicy,
            body: JSON.stringify(data)
        })

        let result: any = await response.json()

        return result
    }
}
