const md = require('../index.js');

(async () => {
    await md.convert('./example/example.conf.json');
    //console.log(`completed`);
    process.exit(0);
})();


