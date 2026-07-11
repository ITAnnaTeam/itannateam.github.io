const fs = require('fs');
const path = require('path');

module.exports = function indexNowPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-indexnow',
    async postBuild({siteConfig, outDir}) {
      const apiKey = options.apiKey || '1c89f5c49bdf483b9c02d12eb6deea48';
      const keyFileName = `${apiKey}.txt`;

      // Write the key file to the build directory so it gets uploaded/deployed
      const outFilePath = path.join(outDir, keyFileName);
      fs.writeFileSync(outFilePath, apiKey);
      console.log(`[IndexNow] Wrote verification key file: ${outFilePath}`);

      // Also ensure it is in the static directory so it's committed/available during local dev
      const staticDirPath = path.join(context.siteDir, 'static');
      if (fs.existsSync(staticDirPath)) {
        const staticFilePath = path.join(staticDirPath, keyFileName);
        if (!fs.existsSync(staticFilePath)) {
          fs.writeFileSync(staticFilePath, apiKey);
          console.log(`[IndexNow] Seeded verification key file to static directory: ${staticFilePath}`);
        }
      }
    },
  };
};
