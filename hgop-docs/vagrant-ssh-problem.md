## This should solve the vagrant authentication and folder mapping problem

Inside the virtual machine:

``` 
wget https://raw.githubusercontent.com/mitchellh/vagrant/master/keys/vagrant.pub -O .ssh/authorized_keys
chmod 700 .ssh
chmod 600 .ssh/authorized_keys
chown -R vagrant:vagrant .ssh
``` 
If your src/tictactoe/ folder is empty, also perform this

Exit the virtual machine and do

```
cd
pwd
      Make sure pwd tells you are in /home/vagrant
rm -rf src      

```

No reload the vagrant machine to apply changes.
```
vagrant reload
```

If no authentication error occurs, the working folder should be mapped correctly (Mac).

If this does not work, try

```
vagrant box remove package.box
vagrant box add package.box --name Default

```

If still no luck, talk to the teacher.
