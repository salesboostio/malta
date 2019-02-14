"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = ("undefined" !== typeof window ? window.__ENV__ : process.env);
exports.getEnv = function () {
    return env.NODE_ENV || "localhost";
};
exports.isLocalhost = function () {
    return exports.getEnv() === "localhost";
};
exports.isDevelopment = function () {
    return exports.getEnv() === "development";
};
exports.isStaging = function () {
    return exports.getEnv() === "staging";
};
exports.isProduction = function () {
    return exports.getEnv() === "production";
};
exports.getAPI = function () {
    if (exports.isProduction()) {
        return "https://api.salesboost.ai";
    }
    else if (exports.isStaging()) {
        return "https://api.staging.salesboost.ai";
    }
    else {
        // return "http://localhost:3201";
        return "https://api.dev.salesboost.ai";
    }
};
exports.getPixelURL = function () {
    if (exports.isProduction()) {
        return "https://pixel.salesboost.ai";
    }
    else if (exports.isStaging()) {
        return "https://pixel.staging.salesboost.ai";
    }
    else {
        return "https://pixel.dev.salesboost.ai";
    }
};
exports.getCatalogURL = function () {
    if (exports.isProduction()) {
        return "https://catalog.salesboost.ai";
    }
    else if (exports.isStaging()) {
        return "https://catalog.staging.salesboost.ai";
    }
    else {
        return "https://catalog.dev.salesboost.ai";
    }
};
exports.getAuthURL = function () {
    if (exports.isProduction()) {
        return "https://auth.salesboost.ai";
    }
    else if (exports.isStaging()) {
        return "https://auth.staging.salesboost.ai";
    }
    else {
        return "https://auth.dev.salesboost.ai";
    }
};
