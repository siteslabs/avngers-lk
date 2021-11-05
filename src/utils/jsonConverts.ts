export const JSONConvert = (value: any, method: string = "parse") => {
  if (method === "parse") {
    return JSON.parse(value);
  }
  return JSON.stringify(value);
};
