ALTER USER 'zabbix_user'@'%' IDENTIFIED WITH mysql_native_password BY 'zabbix_password';
FLUSH PRIVILEGES;