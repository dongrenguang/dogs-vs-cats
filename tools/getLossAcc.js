var a = `

Epoch 1/5
20000/20000 [==============================] - 109s 5ms/step - loss: 0.6931 - acc: 0.5037 - val_loss: 0.6931 - val_acc: 0.5392
Epoch 2/5
20000/20000 [==============================] - 100s 5ms/step - loss: 0.6931 - acc: 0.5052 - val_loss: 0.6930 - val_acc: 0.5044
Epoch 3/5
20000/20000 [==============================] - 100s 5ms/step - loss: 0.6930 - acc: 0.5066 - val_loss: 0.6930 - val_acc: 0.5044
Epoch 4/5
20000/20000 [==============================] - 100s 5ms/step - loss: 0.6929 - acc: 0.5158 - val_loss: 0.6929 - val_acc: 0.5044
Epoch 5/5
20000/20000 [==============================] - 100s 5ms/step - loss: 0.6928 - acc: 0.5173 - val_loss: 0.6929 - val_acc: 0.5044
`;

var l = a.split(' - acc: ');
var r = [];
for (var i = 1; i < l.length; i ++) {
    r.push(parseFloat(l[i].substring(0, 6)));
}
console.log('acc');
console.log(r);

var l = a.split(' - val_acc: ');
var r = [];
for (var i = 1; i < l.length; i++) {
    r.push(parseFloat(l[i].substring(0, 6)));
}

console.log('val_acc');
console.log(r);