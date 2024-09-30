"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//npm/10.7.0 node/v18.20.4 linux x64 workspaces/false
var npm_config_user_agent = process.env["npm_config_user_agent"] || '';
function npmConfigUserAgent() {
    var _a = npm_config_user_agent.split(" "), packageManager = _a[0], engine = _a[1], platform = _a[2], arch = _a[3], rest = _a.slice(4);
    var _b = packageManager.split("/"), packageManagerName = _b[0], packageManagerVersion = _b[1];
    var _c = engine.split("/"), engineName = _c[0], engineVersion = _c[1];
    return {
        pm: packageManagerName,
        pm_version: packageManagerVersion,
        engine: engineName,
        engine_version: engineVersion,
        platform: platform,
        arch: arch,
        workspaces: rest.includes("workspaces/true"),
        ci: rest.find((function (c) { return c.startsWith("ci/"); })),
    };
}
exports.default = npmConfigUserAgent();
