# 猫狗大战

## 软件依赖
> 本项目基于 python 3

- tensorflow：一个流行的深度学习框架
- keras：是对诸如tensorflow、Theano等深度学习框架的高层封装
- Xception模型：Google提出的一个优秀的卷积神经网络模型，本项目就是基于改模型进行了迁移学习
- openCV：图像处理库
具体的可以参阅`requirements.txt`

## 运行项目
在 python 3 环境下，安装完`requirements.txt`中所依赖的库就可以了。然后使用jupyter notebook打开。

本人使用了 AWS 的 p3.2x实例，最耗时的是特征提取，大约5分钟；训练（fit）则比较快，大概一秒钟一个 Epoch；预测也很快，大概5秒钟。

项目的实际运行效果截图参看提交的压缩包文件。

## 数据
本文依赖的数据来源于[Kaggle](https://www.kaggle.com/c/dogs-vs-cats-redux-kernels-edition/data)和牛津大学的[The Oxford-IIIT Pet Dataset](http://www.robots.ox.ac.uk/~vgg/data/pets/)。

为了方便获取我已经将数据集放在了[GitHub](https://github.com/dongrenguang/dogs-vs-cats-dataset)上。

## GitHub
除了[数据集](https://github.com/dongrenguang/dogs-vs-cats-dataset)，我还将本次项目的所有代码都放在了[GitHub](https://github.com/dongrenguang/dogs-vs-cats)上。