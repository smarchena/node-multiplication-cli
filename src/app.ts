import { yarg } from "./config/plugins/yargs.plugin.js";
import { ServerApp } from "./presentation/server.app.js";

// console.log(process.argv);

(async () => { // función asíncrona anónima autoinvoacada    
    await main();
})();

async function main() {

    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });

}