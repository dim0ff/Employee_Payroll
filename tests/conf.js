exports.config = {
    rootElement:"app",
    seleniumAddress: "http://localhost:4444/wd/hub",
    framework:"jasmine2",
    capabilities: {"browserName": "chrome"},
    specs: ["todo-spec.js"],
    systemjs: {
        configFile: 'system.conf.js'
    }
};
