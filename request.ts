export class Request {

    static async get(url: string): Promise<any> {
        let response: any = await fetch(url)

        let result = await response.json()

        return result
    }


    static async post(url: string, data: any): Promise<any> {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        
        let result: any = await response.json()

        return result
    }


    static async delete(url: string): Promise<any> {
        let response: any = await fetch(url, {
            method: 'DELETE',
        })

        let result: any = await response.json()

        return result
    }


    static async put(url: string, data: any): Promise<any> {
        const response: any = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })

        let result: any = await response.json()

        return result
    }
}
