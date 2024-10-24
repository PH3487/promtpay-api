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
      repo: "git@github.com:generative-promtpay/backend-service.git",
      path: "/var/gitlab/backend-service",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
