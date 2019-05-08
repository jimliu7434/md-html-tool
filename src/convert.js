const concatmd = require('concat');
const fs = require('fs');
const toc = require('markdown-toc');
const mume = require('@shd101wyy/mume');
const prettyjson = require('prettyjson');
const { red, yellow, green, cyan } = require('colors');

module.exports = async function (settingfile) {
    console.log(`\n${yellow('Convertion started')}\n`);

    const setting = require('./getconf.js')(settingfile);

    console.log(green('setting'));
    console.log('------');
    console.log(prettyjson.render(setting));
    console.log('------');
    console.log('');

    if (setting.mdfiles.length <= 0) {
        console.log(`no mdfiles to convert`);
        return;
    }

    try {
        const mdFile = `${setting.target}.md`;
        await concatmd(setting.mdfiles, mdFile);

        const content = fs.readFileSync(mdFile, { encoding: 'utf8' });
        const nwContent = toc.insert(content);
        fs.writeFileSync(mdFile, nwContent, { encoding: 'utf8' });
        await mume.init();
        const engine = new mume.MarkdownEngine({
            filePath: mdFile,
            config: {
                enableScriptExecution: true, // <= for running code chunks
            },
        });
        await engine.htmlExport({ offline: true, runAllCodeChunks: true, });
        console.log(`${green('file')} - ${cyan(setting.target)}${cyan('.html')} done`);
        console.log(`\n${yellow('Convertion completed')}\n`);
    }
    catch (err) {
        console.error(`${red('Error')} ${err.message}`);
    }
    finally {
        return;
    }
};