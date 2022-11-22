export function getMessageError(error: unknown): string {
  if (error === null || error === undefined) {
    return ""
  }

  if (typeof error === "string") {
    return error.toLocaleUpperCase();
  }

  if (typeof error === "number") {
    return error.toString()
  }
  
  if (typeof error === "object") {
    return Object.keys(error).map(key => key).join(",")
  }

  return "Something went wrong"
}
