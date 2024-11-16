module.exports = {
    apps: [{
        name: "api-wp",
        script: "./src/app.ts", // Cambiado a ./src/app.ts si estás utilizando TypeScript
        watch: true,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
