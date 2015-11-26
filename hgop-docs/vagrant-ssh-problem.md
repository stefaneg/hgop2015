## This should solve the vagrant authentication and folder mapping problem

Edit Vagrant file, add line before "end" in file. Maintain indent.

``` 
config.ssh.insert_key = false
``` 

run commands in folder with Vagrantfile:
``` 
vagrant suspend
vagrant box remove package.box
vagrant box add package.box --name Default
``` 


And maybe, inside the virtual machine:

``` 
wget https://raw.githubusercontent.com/mitchellh/vagrant/master/keys/vagrant.pub -O .ssh/authorized_keys
chmod 700 .ssh
chmod 600 .ssh/authorized_keys
chown -R vagrant:vagrant .ssh
``` 
