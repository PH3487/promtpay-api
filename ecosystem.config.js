module.exports = {
  apps: [
    {
      name: "backend-service",
      script: "./server.js",
    },
  ],
  deploy: {
    production: {
      user: "root", // Replace with your SSH username
      host: "154.197.124.66", // Your server's IP
      ref: "origin/main", // Branch to deploy from
      repo: "git@github.com:PH3487/promtpay-api.git", // Your repository
      path: "/var/www/backend-service", // Path on the server where the app will be deployed
      "pre-deploy-local": "", // Commands to run locally before deployment
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production", // Commands to run after deployment
      ssh_options: ["StrictHostKeyChecking=no"], // Optional, for bypassing SSH key checks
      port: "2224", // Specify the port here
    },
  },
};
