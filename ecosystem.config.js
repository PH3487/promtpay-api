module.exports = {
  apps: [
    {
      script: "dist/app.js",
      watch: ".",
    },
    {
      script: "./service-worker/",
      watch: ["./service-worker"],
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "154.197.124.66:2224",
      ref: "origin/main",
      repo: "git@github.com:PH3487/promtpay-api.git",
      path: "/var/github/promtpay-api",
      "post-deploy": "npm install && npm run build && pm2 reload ecosystem.config.js --env production"
    },
  },
};
