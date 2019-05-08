const md = require('../index.js');

(async () => {
    await md.convert();
    //console.log(`completed`);
    process.exit(0);
})();


