# python

## Base

Install virtualenv
```bash
pip install virtualenv virtualenvwrap
pyenv-virtualenv  # 提供不同版本的虚拟环境
```

use virtualenv
```
# use in current folder
mkvirtual livelog -p python3
# will auto create ~/.virtualenvs/livelog/

# another method
virtualenv -p python3 .env       # Create a virtual environment (python3)
source .env/bin/activate         # Activate the virtual environment
pip install -r requirements.txt  # Install dependencies
deactivate                       # Exit the virtual environment
```

Install dependence by freeze
```
pip install -r requirements.txt
pip freeze > requirements.txt
```

Update upgrade software
```
pip install software --upgrade  # or -U
pip show Jinja2
pip list --outdated # outdated software
```

Use notebook
```
pip install notebook
ipython notebook
```


## Log

- Get info about scipy: `pip info scipy` or `python -c "import matplotlib; print(matplotlib.__version__)"`

- ` PIL is basically dead. Pillow is a maintained fork of PIL.`


