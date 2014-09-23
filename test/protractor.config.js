var HtmlReporter = require('protractor-html-screenshot-reporter');

// The main suite of Protractor tests.
exports.config = {
//    seleniumAddress: "http://localhost:4444/wd/hub",

// Spec patterns are relative to this directory.
    specs: [
        'functional/*.js'
    ],

    chromeOnly: false,
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:9001',

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 50000
    }

//    onPrepare: function() {
//        // Add a reporter and store screenshots to `screnshots`:
//        jasmine.getEnv().addReporter(new HtmlReporter({
//            baseDirectory: 'report',
//            pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
//
//                var currentDate = new Date();
//                return path.join(capabilities.caps_.browserName, currentDate.toISOString().replace(/-/g, ""), descriptions.join('-'));
//            }
//        }));
//
//    }
};