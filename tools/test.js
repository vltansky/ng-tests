// for(let i=1;i<301;i++){
//     let out = `{ path: 'f${i}', loadChildren: () => import('./f (${i})/loans2.module').then(m => m.k13Module) },`
//     console.log(out);
// }

const fs = require("fs-extra");
const glob = require("fast-glob");
const path = require("path");

async function init(){
    const modules = await glob("./src/app/**/*.module.ts");
    for(let m of modules){
        const dir = path.dirname(m);
        console.log(dir);
        await fs.copy("./src/json/57.json", dir+'/57.json');
    }
}

init();