import React from "react";
import queryString from "query-string";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const SalesboostRouter = ({ children }: { children: React.ReactNode }) => (
  <Router history={history}>
    {children}
  </Router>
);

export const createQueryString = ({ include, query }: { include?: "all"; query: { [key: string]: string; } }): string => {
  let queryObject = {};

  if (include === "all") {
    queryObject = {
      ...queryString.parse(window.location.search),
    };
  }
  queryObject = {
    ...queryObject,
    ...query,
  };

  return `?${queryString.stringify(queryObject)}`;
};

const getUserIndexFromURL = () => {
  const query = queryString.parse(window.location.search);
  return (query.userIndex || query.authUser || "0") as string;
};

export const useLink = () => {
  return {
    go: (path: string, query?: { [key: string]: string; }) => {
      const userIndex = getUserIndexFromURL();
      if (userIndex !== "0" && query) {
        query = {
          ...query,
          userIndex,
        };
      } else if (userIndex !== "0" && !query) {
        query = {
          userIndex,
        };
      }
      const qs = query ? createQueryString({ query }) : "";
      history.push(`${path}${qs}`);
    },
    redirect: (path: string, query?: { [key: string]: string; }) => {
      const userIndex = getUserIndexFromURL();
      if (userIndex !== "0" && query) {
        query = {
          ...query,
          userIndex,
        };
      } else if (userIndex !== "0" && !query) {
        query = {
          userIndex,
        };
      }
      const qs = query ? createQueryString({ query }) : "";
      history.replace(`${path}${qs}`);
    },
  }
};
