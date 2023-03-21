"use strict";

/**
 * post router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts/add",
      handler: "api::post-custom.exampleAction",
    },
  ],
};
