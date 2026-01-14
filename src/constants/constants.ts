const CLOUD_PROJECT_NUMBER = "1050924442946";
const BASE_URL = inDebugMode() ? "http://localhost:3000" : "";

function inDebugMode() {
  return process.env.NEXT_PUBLIC_DEBUG === "1";
}

export { CLOUD_PROJECT_NUMBER, BASE_URL };
