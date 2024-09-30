

//npm/10.7.0 node/v18.20.4 linux x64 workspaces/false
const npm_config_user_agent = process.env["npm_config_user_agent"] || '';

function npmConfigUserAgent() {
  const [packageManager, engine, platform, arch, ...rest] = npm_config_user_agent.split(" ");
  const [packageManagerName, packageManagerVersion] = packageManager.split("/");
  const [engineName, engineVersion] = engine.split("/");

  return {
    pm: packageManagerName,
    pm_version: packageManagerVersion,
    engine: engineName,
    engine_version: engineVersion,
    platform,
    arch,
    workspaces: rest.includes("workspaces/true"),
    ci: rest.find((c => c.startsWith("ci/"))),
  };
}

export default npmConfigUserAgent();
