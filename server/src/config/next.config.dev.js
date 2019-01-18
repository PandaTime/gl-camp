const withSass = require('@zeit/next-sass');
const path = require('path');
const rootPath = path.join(__dirname, '..', '..')

module.exports = withSass(withClientProject({
  // cssModules: true,
  sassLoaderOptions: {
    //   //includePaths: ["absolute/path/a", "absolute/path/b"]
  }
}));


function withClientProject(nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack: (config) => {
      // Adding client project otherwise babel won't compile client's source
      const clientPath = path.join(rootPath, '..', 'client');
      config.resolve.alias.client = path.join(clientPath, 'src');
      config.module.rules.forEach((rule) => {
        if (!/(js|jsx)/.test(rule.test)) { return; }
        rule.include.push(config.resolve.alias.client);
        // It won't show any errors, but it doesn't work
        // rule.use.options.presets = ["mobx"];
      })
      return config;
    },
  });
}

