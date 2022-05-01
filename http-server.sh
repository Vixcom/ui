@echo off
read -p "Please enter the server address: " server_address
http-server -a=$project_name -p=1400 -s --cors
read -p "Press [Enter] key to continue..."