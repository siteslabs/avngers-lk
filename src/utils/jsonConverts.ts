import { JSONConvertValue } from "./types";

export const JSONConvert = (
  value: JSONConvertValue,
  isParse: boolean = true
) => {
  if (isParse && typeof value === "string") {
    return JSON.parse(value);
  }

  return JSON.stringify(value);
};
