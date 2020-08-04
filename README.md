# Request

API Calls - as simple as it gets :)

<a target="_blank" href="https://brave.com/">
    <img src="https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg" alt="drawing" width="100"/>
</a>

## Usage Example

```

import { Request } from 'https://deno.land/x/request@1.0.0/request.ts'

const result = await Request.get('http://api.open-notify.org/iss-now.json')

console.log(result)

```

For Post, Put and Delete examples please check
[request.ts](https://deno.land/x/request@1.0.0/request.ts). It should be
self-explaining. If not feel free to create an issue.

## Execute the Tests

```

deno test --allow-net https://raw.githubusercontent.com/michael-spengler/request/master/test.ts

```
