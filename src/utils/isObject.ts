export const isObject = (x: unknown): x is Object =>
  x !== null && (typeof x === "object" || typeof x === "function");
