/**
 * @file 分析预测结果
 * @author dongrenguang
 */

const fs = require('fs');
const path = require('path');

const result = fs.readFileSync(path.resolve(__dirname, './predict.csv')).toString();
const list = result.split('\n');
list.splice(0, 1);
list.splice(list.length - 1, 1);

const dis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
list.forEach(item => {
    const [id, score] = item.split(',');

    for (let i = 0; i < 10; i++) {
        if (score > 0.1 * i && score <= 0.1 * (i + 1)) {
            dis[i] += 1;
        }
    }

    if (score == 0) {
        dis[0] += 1;
    }
});
console.log(dis);