import { Request } from './request.ts'

Deno.test("get request", async (): Promise<void> => {
    
    const url = 'http://api.open-notify.org/iss-now.json' // :)

    const result = await Request.get(url) 

    console.log(result)
});
