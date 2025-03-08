const express = require("express");
const app = express();
const router = express.Router();
const log = require("../utils/logger");
const { readdirSync } = require("fs-extra");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

// Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Docs",
      version: "6.9.0",
      description: "I hate myself",
    },
  },
  apis: ["./lib/**/*.js"], // Adjust this path to match your project structure
};

// Function to generate dynamic path
const generateSwaggerPath = () => `/docs/${Date.now()}`; // Can use Math.random() for random path

// Load and register routes
try {
  const srcPath = path.join(process.cwd(), "/lib/");
  const routeFiles = readdirSync(srcPath).filter((file) => file.endsWith(".js"));
  let routeCount = 0;

  // Load route files in /lib folder
  for (const file of routeFiles) {
    if (file !== 'main.js') {
      const { index, name } = require(path.join(srcPath, file));
      if (index && name) {
        router.get(name, index);
        routeCount++;
      } else {
        log(`Error loading ${file}: index or name is undefined`, 'ERROR');
      }
    }
  }

  // Load route files in subdirectories of /lib folder
  const subDirs = readdirSync(srcPath).filter((file) => !file.endsWith(".js") && !file.endsWith(".json"));
  for (const dir of subDirs) {
    const filesInDir = readdirSync(path.join(srcPath, dir)).filter((file) => file.endsWith(".js") && file !== 'main.js');
    for (const subFile of filesInDir) {
      const { index, name } = require(path.join(srcPath, dir, subFile));
      if (index && name) {
        router.get(name, index);
        routeCount++;
      } else {
        log(`Error loading ${dir}/${subFile}: index or name is undefined`, 'ERROR');
      }
    }
  }

  log(`Successfully loaded ${routeCount} route files`, 'API');

  // Serve Swagger JSON with no caching headers
  app.get('/swagger.json', (req, res) => {
    const swaggerSpec = swaggerJSDoc(options); // Regenerate Swagger spec on every request
    console.log('Serving latest swaggerSpec');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.json(swaggerSpec);
  });

  // Serve Swagger UI at /docs without redirection
  app.use("/docs", (req, res) => {
    const swaggerPath = generateSwaggerPath();
    console.log(`Serving Swagger UI at dynamic path: ${swaggerPath}`);
    return swaggerUi.serve(req, res, () => {
      res.send(swaggerUi.generateHTML(swaggerJSDoc(options), {
        swaggerOptions: {
          url: '/swagger.json', // Swagger JSON URL
        },
      }));
    });
  });

} catch (error) {
  console.error("Error loading routes:", error);
}

// Start the server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = router;
