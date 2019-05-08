const path = require('path');


module.exports = function () {
    const config = require(path.join(process.cwd(), '/package.json'));
    if (!config['md-html-tool']) {
        throw new Error(`cannot find config [md-html-tool] from package.json`);
    }
    if (typeof config['md-html-tool'] !== 'object') {
        throw new Error(`config [md-html-tool] must be a object`);
    }
    const settingDefault = {
        mdfiles: [],
        target: path.join(process.cwd(), 'converted.html'),
    };
    let setting = {};
    Object.assign(setting, settingDefault, config['md-html-tool']);

    return setting;
};