/**
 * @file 获取 dataset-extra/images 下的动物种类
 * @author dongrenguang
 */

const fs = require('fs');

const imageList = fs.readdirSync('./dataset/images-Oxford-IIIT');
const types = [];

imageList.forEach(item => {
    const s = item.split('_');
    s.splice(s.length - 1, 1);
    const type = s.join('_');
    if (types.indexOf(type) === -1) {
        types.push(type);
    }
});

console.log(types);
console.log(types.length);