// @ts-check
// ^^^ Enables Type Checking by the TypeScript compiler

import { makeRESTRequest, rawKeyValueEntriesToString } from "@hoppscotch/data"
import { parseCurlToHoppRESTReq } from ".."

const samples = [
  {
    command: `
      curl --request GET \
      --url https://echo.hoppscotch.io/ \
      --header 'content-type: application/x-www-form-urlencoded' \
      --data a=b \
      --data c=d
    `,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://echo.hoppscotch.io/",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: "application/x-www-form-urlencoded",
        body: rawKeyValueEntriesToString([
          {
            active: true,
            key: "a",
            value: "b",
          },
          {
            active: true,
            key: "c",
            value: "d",
          },
        ]),
      },
      headers: [],
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `
      curl 'http://avs:def@127.0.0.1:8000/api/admin/crm/brand/4'
        -X PUT
        -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0'
        -H 'Accept: application/json, text/plain, */*'
        -H 'Accept-Language: en'
        --compressed
        -H 'Content-Type: application/hal+json;charset=utf-8'
        -H 'Origin: http://localhost:3012'
        -H 'Connection: keep-alive'
        -H 'Referer: http://localhost:3012/crm/company/4'
        --data-raw '{"id":4,"crm_company_id":4,"industry_primary_id":2,"industry_head_id":2,"industry_body_id":2,"code":"01","barcode":"222010101","summary":"Healt-Seasoning-Basic-Hori-Kello","name":"Kellolaa","sub_code":"01","sub_name":"Hori","created_at":"2020-06-08 08:50:02","updated_at":"2020-06-08 08:50:02","company":4,"primary":{"id":2,"code":"2","name":"Healt","created_at":"2020-05-19 07:05:02","updated_at":"2020-05-19 07:09:28"},"head":{"id":2,"code":"2","name":"Seasoning","created_at":"2020-04-14 19:34:33","updated_at":"2020-04-14 19:34:33"},"body":{"id":2,"code":"2","name":"Basic","created_at":"2020-04-14 19:33:54","updated_at":"2020-04-14 19:33:54"},"contacts":[]}'
    `,
    response: makeRESTRequest({
      method: "PUT",
      name: "Untitled request",
      endpoint: "http://127.0.0.1:8000/api/admin/crm/brand/4",
      auth: {
        authType: "basic",
        authActive: true,
        username: "avs",
        password: "def",
      },
      body: {
        contentType: "application/hal+json",
        body: `{
  "id": 4,
  "crm_company_id": 4,
  "industry_primary_id": 2,
  "industry_head_id": 2,
  "industry_body_id": 2,
  "code": "01",
  "barcode": "222010101",
  "summary": "Healt-Seasoning-Basic-Hori-Kello",
  "name": "Kellolaa",
  "sub_code": "01",
  "sub_name": "Hori",
  "created_at": "2020-06-08 08:50:02",
  "updated_at": "2020-06-08 08:50:02",
  "company": 4,
  "primary": {
    "id": 2,
    "code": "2",
    "name": "Healt",
    "created_at": "2020-05-19 07:05:02",
    "updated_at": "2020-05-19 07:09:28"
  },
  "head": {
    "id": 2,
    "code": "2",
    "name": "Seasoning",
    "created_at": "2020-04-14 19:34:33",
    "updated_at": "2020-04-14 19:34:33"
  },
  "body": {
    "id": 2,
    "code": "2",
    "name": "Basic",
    "created_at": "2020-04-14 19:33:54",
    "updated_at": "2020-04-14 19:33:54"
  },
  "contacts": []
}`,
      },
      headers: [
        {
          active: true,
          key: "User-Agent",
          value:
            "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
        },
        {
          active: true,
          key: "Accept",
          value: "application/json, text/plain, */*",
        },
        {
          active: true,
          key: "Accept-Language",
          value: "en",
        },
        {
          active: true,
          key: "Origin",
          value: "http://localhost:3012",
        },
        {
          active: true,
          key: "Connection",
          value: "keep-alive",
        },
        {
          active: true,
          key: "Referer",
          value: "http://localhost:3012/crm/company/4",
        },
      ],
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl google.com`,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://google.com/",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: null,
        body: null,
      },
      headers: [],
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl -X POST -d '{"foo":"bar"}' http://localhost:1111/hello/world/?bar=baz&buzz`,
    response: makeRESTRequest({
      method: "POST",
      name: "Untitled request",
      endpoint: "http://localhost:1111/hello/world/?buzz",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: "application/json",
        body: `{\n  "foo": "bar"\n}`,
      },
      headers: [],
      params: [
        {
          active: true,
          key: "bar",
          value: "baz",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl --get -d "tool=curl" -d "age=old" https://example.com`,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://example.com/",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: null,
        body: null,
      },
      headers: [],
      params: [
        {
          active: true,
          key: "tool",
          value: "curl",
        },
        {
          active: true,
          key: "age",
          value: "old",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl -F hello=hello2 -F hello3=@hello4.txt bing.com`,
    response: makeRESTRequest({
      method: "POST",
      name: "Untitled request",
      endpoint: "https://bing.com/",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: "multipart/form-data",
        body: [
          {
            active: true,
            isFile: false,
            key: "hello",
            value: "hello2",
          },
          {
            active: true,
            isFile: false,
            key: "hello3",
            value: "",
          },
        ],
      },
      headers: [],
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command:
      "curl -X GET localhost -H 'Accept: application/json' --user root:toor",
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "http://localhost/",
      auth: {
        authType: "basic",
        authActive: true,
        username: "root",
        password: "toor",
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [
        {
          active: true,
          key: "Accept",
          value: "application/json",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command:
      "curl -X GET localhost --header 'Authorization: Basic dXNlcjpwYXNz'",
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "http://localhost/",
      auth: {
        authType: "basic",
        authActive: true,
        username: "user",
        password: "pass",
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command:
      "curl -X GET localhost:9900 --header 'Authorization: Basic 77898dXNlcjpwYXNz'",
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "http://localhost:9900/",
      auth: {
        authType: "none",
        authActive: true,
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command:
      "curl -X GET localhost --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'",
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "http://localhost/",
      auth: {
        authType: "bearer",
        authActive: true,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl --get -I -d "tool=curl" -d "platform=hoppscotch" -d"io" https://hoppscotch.io`,
    response: makeRESTRequest({
      method: "HEAD",
      name: "Untitled request",
      endpoint: "https://hoppscotch.io/?io",
      auth: {
        authActive: true,
        authType: "none",
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [
        {
          active: true,
          key: "tool",
          value: "curl",
        },
        {
          active: true,
          key: "platform",
          value: "hoppscotch",
        },
      ],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl 'https://someshadywebsite.com/questionable/path/?and=params&so&stay=tuned&' \
  -H 'user-agent: Mozilla/5.0' \
  -H 'accept: text/html' \
  -H $'cookie: cookie-cookie' \
  --data $'------WebKitFormBoundaryj3oufpIISPa2DP7c\\r\\nContent-Disposition: form-data; name="EmailAddress"\\r\\n\\r\\ntest@test.com\\r\\n------WebKitFormBoundaryj3oufpIISPa2DP7c\\r\\nContent-Disposition: form-data; name="Entity"\\r\\n\\r\\n1\\r\\n------WebKitFormBoundaryj3oufpIISPa2DP7c--\\r\\n'`,
    response: makeRESTRequest({
      method: "POST",
      name: "Untitled request",
      endpoint: "https://someshadywebsite.com/questionable/path/?so",
      auth: {
        authActive: true,
        authType: "none",
      },
      body: {
        contentType: "multipart/form-data",
        body: [
          {
            active: true,
            isFile: false,
            key: "EmailAddress",
            value: "test@test.com",
          },
          {
            active: true,
            isFile: false,
            key: "Entity",
            value: "1",
          },
        ],
      },
      params: [
        {
          active: true,
          key: "and",
          value: "params",
        },
        {
          active: true,
          key: "stay",
          value: "tuned",
        },
      ],
      headers: [
        {
          active: true,
          key: "user-agent",
          value: "Mozilla/5.0",
        },
        {
          active: true,
          key: "accept",
          value: "text/html",
        },
        {
          active: true,
          key: "cookie",
          value: "cookie-cookie",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command:
      "curl localhost -H 'content-type: multipart/form-data; boundary=------------------------d74496d66958873e' --data '-----------------------------d74496d66958873e\\r\\nContent-Disposition: form-data; name=\"file\"; filename=\"test.txt\"\\r\\nContent-Type: text/plain\\r\\n\\r\\nHello World\\r\\n\\r\\n-----------------------------d74496d66958873e--\\r\\n'",
    response: makeRESTRequest({
      method: "POST",
      name: "Untitled request",
      endpoint: "http://localhost/",
      auth: {
        authActive: true,
        authType: "none",
      },
      body: {
        contentType: "multipart/form-data",
        body: [
          {
            active: true,
            isFile: false,
            key: "file",
            value: "",
          },
        ],
      },
      params: [],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl 'https://hoppscotch.io/' \
    -H 'authority: hoppscotch.io' \
    -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"' \
    -H 'accept: */*' \
    -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36' \
    -H 'sec-ch-ua-platform: "Windows"' \
    -H 'accept-language: en-US,en;q=0.9,ml;q=0.8' \
    --compressed`,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://hoppscotch.io/",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [
        {
          active: true,
          key: "authority",
          value: "hoppscotch.io",
        },
        {
          active: true,
          key: "sec-ch-ua",
          value:
            '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        },
        {
          active: true,
          key: "accept",
          value: "*/*",
        },
        {
          active: true,
          key: "user-agent",
          value:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
        },
        {
          active: true,
          key: "sec-ch-ua-platform",
          value: '"Windows"',
        },
        {
          active: true,
          key: "accept-language",
          value: "en-US,en;q=0.9,ml;q=0.8",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl --request GET \
    --url 'https://echo.hoppscotch.io/?hello=there' \
    --header 'content-type: application/x-www-form-urlencoded' \
    --header 'something: other-thing' \
    --data a=b \
    --data c=d`,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://echo.hoppscotch.io/",
      auth: { authType: "none", authActive: true },
      body: {
        contentType: "application/x-www-form-urlencoded",
        body: rawKeyValueEntriesToString([
          {
            key: "a",
            value: "b",
            active: true,
          },
          {
            key: "c",
            value: "d",
            active: true,
          },
        ]),
      },
      params: [
        {
          active: true,
          key: "hello",
          value: "there",
        },
      ],
      headers: [
        {
          active: true,
          key: "something",
          value: "other-thing",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl --request POST \
    --url 'https://echo.hoppscotch.io/?hello=there' \
    --header 'content-type: multipart/form-data' \
    --header 'something: other-thing' \
    --form a=b \
    --form c=d`,
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "https://echo.hoppscotch.io/",
      method: "POST",
      auth: { authType: "none", authActive: true },
      headers: [
        {
          active: true,
          key: "something",
          value: "other-thing",
        },
      ],
      body: {
        contentType: "multipart/form-data",
        body: [
          {
            active: true,
            isFile: false,
            key: "a",
            value: "b",
          },
          {
            active: true,
            isFile: false,
            key: "c",
            value: "d",
          },
        ],
      },
      params: [
        {
          active: true,
          key: "hello",
          value: "there",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: "curl 'muxueqz.top/skybook.html'",
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "https://muxueqz.top/skybook.html",
      method: "GET",
      auth: { authType: "none", authActive: true },
      headers: [],
      body: { contentType: null, body: null },
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: "curl -F abcd=efghi",
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "https://echo.hoppscotch.io/",
      method: "POST",
      auth: { authType: "none", authActive: true },
      headers: [],
      body: {
        contentType: "multipart/form-data",
        body: [
          {
            active: true,
            isFile: false,
            key: "abcd",
            value: "efghi",
          },
        ],
      },
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: "curl 127.0.0.1 -X custommethod",
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "http://127.0.0.1/",
      method: "CUSTOMMETHOD",
      auth: { authType: "none", authActive: true },
      headers: [],
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: "curl echo.hoppscotch.io -A pinephone",
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "https://echo.hoppscotch.io/",
      method: "GET",
      auth: { authType: "none", authActive: true },
      headers: [
        {
          active: true,
          key: "User-Agent",
          value: "pinephone",
        },
      ],
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: "curl echo.hoppscotch.io -G",
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "https://echo.hoppscotch.io/",
      method: "GET",
      auth: { authType: "none", authActive: true },
      headers: [],
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl --get -I -d "tool=hopp" https://example.org`,
    response: makeRESTRequest({
      name: "Untitled request",
      endpoint: "https://example.org/",
      method: "HEAD",
      auth: { authType: "none", authActive: true },
      headers: [],
      body: {
        contentType: null,
        body: null,
      },
      params: [
        {
          active: true,
          key: "tool",
          value: "hopp",
        },
      ],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl google.com -u userx`,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://google.com/",
      auth: {
        authType: "basic",
        authActive: true,
        username: "userx",
        password: "",
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
  {
    command: `curl google.com -H "Authorization"`,
    response: makeRESTRequest({
      method: "GET",
      name: "Untitled request",
      endpoint: "https://google.com/",
      auth: {
        authType: "none",
        authActive: true,
      },
      body: {
        contentType: null,
        body: null,
      },
      params: [],
      headers: [],
      preRequestScript: "",
      testScript: "",
    }),
  },
]

describe("parseCurlToHoppRESTReq", () => {
  for (const [i, { command, response }] of samples.entries()) {
    test(`matches expectation for sample #${i + 1}`, () => {
      expect(parseCurlToHoppRESTReq(command)).toEqual(response)
    })
  }
})
