import * as path from "node:path";
import process from "node:process";

//npm/10.7.0 node/v18.20.4 linux x64 workspaces/false
const npm_config_user_agent = process.env["npm_config_user_agent"] || '';

export function npmConfigUserAgent() {
  const [packageManager, engine, platform, arch, ...rest] = npm_config_user_agent.split(" ").filter(f => !["npm/?"].includes(f));
  const [packageManagerName, packageManagerVersion] = packageManager ? packageManager.split("/") : [];
  const [engineName, engineVersion] = engine ? engine.split("/") : [];

  const command = process.argv0.split(path.sep).at(-1);
  return {
    pm: packageManagerName,
    pm_version: packageManagerVersion,
    engine: engineName || command,
    engine_version: engineVersion || process.version,
    platform: platform || process.platform,
    arch: arch || process.arch,
    workspaces: rest.includes("workspaces/true"),
    ci: rest.find((c => c?.startsWith("ci/"))),
  };
}

