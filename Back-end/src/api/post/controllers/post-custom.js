"use strict";

/**
 * A set of functions called "actions" for `post-custom`
 */
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::forms.forms", () => ({
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
}));
