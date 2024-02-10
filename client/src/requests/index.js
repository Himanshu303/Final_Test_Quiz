import Cookies from "js-cookie";

export const server = "https://final-test-quiz-api.vercel.app";

export function config() {
  const token = Cookies.get("token");
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}
