for(let i=1;i<301;i++){
    let out = `{ path: 'f${i}', loadChildren: () => import('./f (${i})/loans2.module').then(m => m.k13Module) },`
    console.log(out);
}