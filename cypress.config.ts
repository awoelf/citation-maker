import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        watchForFileChanges: false,
        setupNodeEvents(on, config) {
            require('cypress-localstorage-commands/plugin')(on, config);
            return config;
        },
    },
});
