const env = ("undefined" !== typeof window ? (window as any).__ENV__ : process.env);

export const getEnv = () => {
  return env.NODE_ENV || "localhost";
};

export const isLocalhost = () => {
  return getEnv() === "localhost";
};

export const isDevelopment = () => {
  return getEnv() === "development";
};

export const isStaging = () => {
  return getEnv() === "staging";
};

export const isProduction = () => {
  return getEnv() === "production";
};

export const getAPI = () => {
  if (isProduction()) {
    return "https://api.salesboost.ai";
  } else if (isStaging()) {
    return "https://api.staging.salesboost.ai";
  } else {
    // return "http://localhost:3201";
    return "https://api.dev.salesboost.ai";
  }
};

export const getPixelURL = () => {
  if (isProduction()) {
    return "https://pixel.salesboost.ai";
  } else if (isStaging()) {
    return "https://pixel.staging.salesboost.ai";
  } else {
    return "https://pixel.dev.salesboost.ai";
  }
};

export const getCatalogURL = () => {
  if (isProduction()) {
    return "https://catalog.salesboost.ai";
  } else if (isStaging()) {
    return "https://catalog.staging.salesboost.ai";
  } else {
    return "https://catalog.dev.salesboost.ai";
  }
};

export const getAuthURL = () => {
  if (isProduction()) {
    return "https://auth.salesboost.ai";
  } else if (isStaging()) {
    return "https://auth.staging.salesboost.ai";
  } else {
    return "https://auth.dev.salesboost.ai";
  }
};
