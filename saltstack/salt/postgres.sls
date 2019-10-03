postgresql:
  pkg.installed: 
    - pkg: postgresql

copy file:
  file.managed:
    - name: /home/vagrant/script1.sh
    - source: salt://script1.sh

Run myscript:
  cmd.run:
    - name: sudo sh /home/vagrant/script1.sh