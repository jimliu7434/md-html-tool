const path = require('path');
const fs = require('fs');

module.exports = function (settingfile) {
    let conf;
    
    if (settingfile) {
        const confPath = path.join(process.cwd(), settingfile);
        if (fs.existsSync(confPath)) {
            conf = require(confPath);
        }
        if (!conf) {
            throw new Error(`cannot find config from ${settingfile}`);
        }
        if (typeof conf !== 'object') {
            throw new Error(`config must be a object`);
        }
    }
    else {
        const config = require(path.join(process.cwd(), '/package.json'));
        conf = config['md-html-tool'];
        if (!conf) {
            throw new Error(`cannot find config [md-html-tool] from package.json`);
        }
        if (typeof conf !== 'object') {
            throw new Error(`config [md-html-tool] must be a object`);
        }
    }

    const settingDefault = {
        mdfiles: [],
        target: path.join(process.cwd(), 'converted.html'),
    };
    let setting = {};
    Object.assign(setting, settingDefault, conf);

    return setting;
};