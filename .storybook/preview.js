import "../styles/styles/main.css";
import { RouterContext } from "next/dist/next-server/lib/router-context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
