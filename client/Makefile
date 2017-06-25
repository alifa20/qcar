
docker-down:
	- docker stop $$(docker ps -a -q)
	- docker rm $$(docker ps -aq)
	- docker volume rm $$(docker volume ls -f dangling=true)
	- docker rmi -f $$(docker images -f dangling=true)
