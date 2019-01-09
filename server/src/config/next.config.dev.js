const withSass = require('@zeit/next-sass')
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
      const clientSrcPath = path.join(rootPath, '..', 'client', 'src');
      config.resolve.alias.client = clientSrcPath;
      config.module.rules.forEach((rule) => {
        if (!/(js|jsx)/.test(rule.test)) { return; }
        rule.include.push(clientSrcPath);
        // It won't show any errors, but it doesnot work
        // rule.use.options.presets = ["mobx"];
      })
      return config;
    },
  });
}

