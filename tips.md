# 安装环境
> python3

```
# Anaconda（AWS Deep Learning AMI (Ubuntu)自带，无需再安装）
$ wget https://repo.anaconda.com/archive/Anaconda3-5.2.0-Linux-x86_64.sh
$ ./Anaconda3-5.2.0-Linux-x86_64.sh
$ source ~/.bashrc

# 安装 python 包
pip install tensorflow
pip install Keras
pip install scikit-learn
pip install opencv-python
pip install tqdm
pip install h5py
pip install numpy
pip install pandas
```

# 设置Jupyter notebook
```
$ cd ~
$ jupyter notebook --generate-config
$ jupyter notebook password
$ vim ~/.jupyter/jupyter_notebook_config.py
    开启以下配置：
    c.NotebookApp.ip='*'
    c.NotebookApp.open_browser = False
    c.NotebookApp.port =8888 
```

# 下载代码
```
$ git clone https://github.com/dongrenguang/dogs-vs-cats.git
```

# 下载图片
```
$ git clone https://github.com/dongrenguang/dogs-vs-cats-dataset.git
```

# 下载模型
```
$ cd ~/.keras && mkdir models
$ cd ~/.keras/models && wget https://github.com/fchollet/deep-learning-models/releases/download/v0.4/xception_weights_tf_dim_ordering_tf_kernels_notop.h5
```
