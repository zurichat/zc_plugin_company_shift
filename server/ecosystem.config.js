module.exports = {
    apps: [
            {
            name: "server",
            script: "server.js",
            env: {
                NODE_ENV: "development",
            },
            env_staging: {
                NODE_ENV: "staging",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
<<<<<<< HEAD
};
=======
};
>>>>>>> ceaa8d3bd900becec3d7c0a354d11487cfce51dc
