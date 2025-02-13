const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/styles/functions/functions.scss";
          @import "@/styles/layout/resets.scss";
          @import "@/styles/settings/fonts.scss";
          @import "@/styles/settings/breakpoints.scss";
          @import "@/styles/settings/icons.scss";
          @import "@/styles/settings/variables.scss";
        `,
      },
    },
  },
});
