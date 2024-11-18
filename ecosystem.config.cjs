module.exports = {
    apps: [{
        name: "api-wp",
        script: "npx tsm ./src/app.ts", // Cambiado a ./src/app.ts si estás utilizando TypeScript
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
