const fs=require('fs');
fs.copyFileSync('node_modules/three/build/three.min.js','www/three.min.js');
fs.mkdirSync('www/fonts',{recursive:true});
const dir='node_modules/@fontsource/press-start-2p/files',f=fs.readdirSync(dir).find(n=>/latin-400-normal\.woff2$/.test(n));
fs.copyFileSync(dir+'/'+f,'www/fonts/press-start-2p.woff2');
console.log('three.js and the arcade font were copied to www/');
