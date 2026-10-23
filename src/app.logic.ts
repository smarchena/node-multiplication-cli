import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin.js'

const { b: base, l: limit, s: showTable } = yarg;


const title: string = (`====================\n    Tabla del ${base}    \n====================\n\n`);
let table: string = '';

for (let i: number = 1; i <= limit; i++) {
    table += `${base} x ${i} = ${base * i}\n`;
}

if (showTable) {
    table = title + table;
    console.log(table);
}


const outputPath = 'outputs';

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/table-${base}.txt`, `\n${table}`)
console.log('*** File created! ***');

