import { HoppRESTRequest } from "@hoppscotch/data"

export type HoppRESTResponse =
  | { type: "loading"; req: HoppRESTRequest }
  | {
      type: "fail"
      headers: { key: string; value: string }[]
      body: ArrayBuffer
      statusCode: number

      meta: {
        responseSize: number // in bytes
        responseDuration: number // in millis
      }

      req: HoppRESTRequest
    }
  | {
      type: "network_fail"
      error: Error

      req: HoppRESTRequest
    }
  | {
      type: "script_fail"
      error: Error
    }
  | {
      type: "success"
      headers: { key: string; value: string }[]
      body: ArrayBuffer
      statusCode: number
      meta: {
        responseSize: number // in bytes
        responseDuration: number // in millis
      }

      req: HoppRESTRequest
    }
