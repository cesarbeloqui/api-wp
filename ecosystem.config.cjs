module.exports = {
    apps: [{
        name: "api-wp",
        script: "./src/app.js", // Asegúrate de que el archivo exista
        watch: true,
        interpreter: "node", // Especifica ts-node como intérprete
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
};
