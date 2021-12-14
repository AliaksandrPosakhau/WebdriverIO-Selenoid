const selenoid = require('./selenoid-conf');
exports.config = {
    
    host: selenoid.config.host,
    port: selenoid.config.port,
    path: selenoid.config.path,
   
    specs: [
        './features/**/*.feature'
    ],
  
    exclude: [
        // 'path/to/excluded/files'
    ],
 
    maxInstances: 10,
  
    capabilities: [{
    
        browserName: 'chrome',
        browserVersion: '94.0',
        'goog:chromeOptions': {
            args: ['--window-size=1920,1080', '--no-sandbox'],
        },
        'selenoid:options': {
            enableVNC: true,
            enableVideo: false
        },

        maxInstances: 5,
        acceptInsecureCerts: true   
    }],
 
    sync: true,
    logLevel: 'info',  
    bail: 0,  
    baseUrl: 'http://localhost',  
    waitforTimeout: 10000,  
    connectionRetryTimeout: 120000, 
    connectionRetryCount: 3,  
    services: ['selenoid'],   
    framework: 'cucumber',
      reporters: ['spec'],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    }    
}
