module.exports = {
  apps : [{
    name: "interior_design_api",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
    },
    // env_production: {
    //   NODE_ENV: "production",
    // }
  }]
};
