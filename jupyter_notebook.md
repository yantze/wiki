# Juypter Notebook

## Basic
Matplotlib 和 Notebook 笔记在 pynb_study.ipynb 中.


## In Docker [^1]

- avalible container
    base-notebook、minimal-notebook、all-spark-notebook、pyspark-notebook、scipy-notebook、datascience-notebook、tensorflow-notebook 以及 r-notebook

run
```
docker run -d -P jupyter/base-notebook
- `-d` 表示用完即删，因此在其中安装的程序、插件并不会在系统中留下任何痕迹
- `-P` 则是为镜像中 expose 的所有端口都分配一个随机的本地映射

mkdir $HOME/nbs
# 映射 $HOME/bns 到 container 的 /home/jovyan/work
docker run -d -p 18888:8888 -v $HOME/nbs:/home/jovyan/work jupyter/base-notebook
```


## Ref
- [^1]: https://blog.windrunner.me/programming/jupyter-docker.html

## Resources
- http://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks
- http://jupyter.readthedocs.io/en/latest/
- http://nbviewer.jupyter.org/github/jrjohansson/

- http://matplotlib.org/contents.html

- http://www.scipy-lectures.org/advanced/image_processing/#statistical-information
- http://www.scipy-lectures.org/index.html
