### DIGITAL OCEAN

Droplet server setup:

-- Ask teacher for referral before creating an account.
* Create account on [DigitalOcean](http://digitalocean.com)
* Create or use existing SSH key (no passphrase)
* Create droplet (512mb, Ubuntu 14.04)
* Log into droplet via ssh
``` 
ssh root@<ipaddress>
``` 

* Follow instructions
  [Ubuntu Linux Setup](http://docs.docker.com/installation/ubuntulinux/)
  or run [script](../provisioning/production/server-init.sh) (may be outdated, not tested since 2014).

When installing docker, use curl -ssL option

To establish ssh link (selecting SSH key did not work for me):

``` 
cat ~/.ssh/id_rsa.pub | ssh root@<ipaddress> "cat >> ~/.ssh/authorized_keys"
``` 
