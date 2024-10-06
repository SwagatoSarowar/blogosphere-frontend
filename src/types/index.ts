export type ColorType =
  | "white"
  | "black"
  | "primary"
  | "danger"
  | "warning"
  | "success";

export type SizeType = "sm" | "base" | "lg";

export type AxiosBody =
  | Record<string, unknown>
  | FormData
  | URLSearchParams
  | string
  | ArrayBuffer
  | Blob
  | Buffer;
