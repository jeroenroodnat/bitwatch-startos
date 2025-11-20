import { types as T, checkWebUrl, catchError } from "../deps.ts";

export const health: T.ExpectedExports.health = {
  // deno-lint-ignore require-await
  async "interface"(effects, duration) {
    // Checks that the server is running and reachable via http
    return healthWeb(effects, duration);
  },
};

// deno-lint-ignore require-await
const healthWeb: T.ExpectedExports.health[""] = async (effects, duration) => {
  return checkWebUrl("http://bitwatch.embassy:3117")(effects, duration).catch(catchError(effects))
};


// *** HELPER FUNCTIONS *** //

// Ensure the starting duration is pass a minimum
const guardDurationAboveMinimum = (
  input: { duration: number; minimumTime: number },
) =>
  (input.duration <= input.minimumTime)
    ? Promise.reject(errorCode(60, "Starting"))
    : null;

const errorCode = (code: number, error: string) => ({
  "error-code": [code, error] as const,
});
const error = (error: string) => ({ error });
const ok = { result: null };
