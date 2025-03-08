const express = require("express");
const router = express.Router();
const log = require("../utils/logger");
const { readdirSync } = require("fs-extra");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./swaggerConfig");

try {
    let srcPath = path.join(process.cwd(), "/lib/");
    const hosting = readdirSync(srcPath).filter((file) => file.endsWith(".js"));
    let n = 0;

    // Load Swagger spec
    const swaggerSpec = swaggerJsDoc(swaggerConfig);

    // Dynamically load the route files in /lib directory
    for (let file of hosting) {
        const { index, name } = require(path.join(srcPath, file));
        console.log(`Loading file: ${file} with name: ${name} and index: ${typeof index}`);
        if (index && name) {
            router.get(name, index);
            n++;
        } else {
            log(`Error loading ${file}: index or name is undefined`, 'ERROR');
        }
    }

    // Load routes from subdirectories in /lib (excluding main.js)
    const subDirs = readdirSync(srcPath).filter((file) => !file.endsWith(".js") && !file.endsWith(".json"));
    for (let dir of subDirs) {
        const files = readdirSync(path.join(srcPath, dir)).filter((file) => file.endsWith(".js") && file !== "main.js");
        for (let file of files) {
            const { index, name } = require(path.join(srcPath, dir, file));
            console.log(`Loading file: ${dir}/${file} with name: ${name} and index: ${typeof index}`);
            if (index && name) {
                router.get(name, index);
                n++;
            } else {
                log(`Error loading ${dir}/${file}: index or name is undefined`, 'ERROR');
            }
        }
    }

    log(`Successfully loaded ${n} files`, 'API');

    // Serve Swagger UI documentation
    //router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

} catch (e) {
    console.error("Error setting up routes:", e);
}

module.exports = router;
