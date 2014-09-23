exports.config = {

//    seleniumAddress: "http://localhost:4444/wd/hub",
    framework: 'cucumber',

    // Spec patterns are relative to this directory.
    specs: [
        'cucumber/numbers.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9000',

    cucumberOpts: {
        require: 'cucumber/step_definitions/steps.js',
        tags: '@dev',
        format: 'summary'
    }

};