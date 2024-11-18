module.exports = {
    apps: [{
        name: "api-wp",
        script: "./src/app.ts", // Asegúrate de que el archivo exista
        watch: true,
        interpreter: "node", // Especifica el intérprete node
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
};
