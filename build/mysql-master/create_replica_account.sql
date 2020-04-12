CREATE USER 'replica_user'@'%' IDENTIFIED BY 'replica_password';
GRANT REPLICATION SLAVE, REPLICATION CLIENT, SELECT, LOCK TABLES ON *.* TO 'replica_user'@'%';
FLUSH PRIVILEGES;