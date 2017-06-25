.PHONY: docker-compose docker-down

docker-compose:
	${INFO} "docker-compose..."
	docker-compose build
	docker-compose up

docker-down:
	- docker stop $$(docker ps -a -q)
	- docker rm $$(docker ps -aq)
	- docker volume rm $$(docker volume ls -f dangling=true)
	- docker rmi -f $$(docker images -f dangling=true)


# Cosmetics
YELLOW := "\e[1;33m"
NC := "\e[0m"

# Shell Functions
INFO := @bash -c '\
	printf $(YELLOW); \
	echo "=> $$1"; \
	printf $(NC)' SOME_VALUE
