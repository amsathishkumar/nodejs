# nodejs
* https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server
## Node installation on centos/ RHEL
* wget http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
*	tar xzvf node-v* && cd node-v*
*	yum install gcc gcc-c++
*	./configure
*	make
*	make install
*	node --version

## Python insatllation on centos
* wget https://www.python.org/ftp/python/2.7.4/Python-2.7.4.tar.bz2
* tar -xvjf Python-2.7.4.tar.bz2
* cd Python-2.7.4
* ./configure --prefix=/usr/local/python2.7 --with-threads --enable-shared
* make
* make install altinstall
* test getting correct python
```sh
/usr/local/python2.7/bin/python2.7 -V
```
* echo "alias python='/usr/local/python2.7/bin/python2.7'" >> ~/.bashrc
* source ~/.bashrc
* python –V
* export PATH=$PATH:/usr/local/python2.7/bin
* python –V
## pip install
* https://pip.pypa.io/en/stable/installing/
* download get-pip.py from https://bootstrap.pypa.io/get-pip.py
* python get-pip.py
* pip --version
```sh
pip 8.1.2 from /usr/lib/python2.7/site-packages (python 2.7)
```
