module.exports.config = {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    desiredCapabilities: {
        browserName: 'chrome',
        version: '94.0',
        enableVNC: true,
        enableVideo: true
    }
};