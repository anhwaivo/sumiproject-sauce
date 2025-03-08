// swaggerConfig.js
const path = require("path");

module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Docs",
      version: "6.9.0",
      description: "I hate myself",
    },
    tags: [
      {
        name: "TEXT",
        description: "return text",
      },
      {
        name: "API OTHERS",
        description: "api random",
      },
    ],
  },
  apis: [path.join(__dirname, "/lib/**/*.js")], // Adjust to match the structure
};
