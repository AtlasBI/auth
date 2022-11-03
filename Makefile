build:
	docker build -t auth .
run:
	docker run -d \
		--rm \
		-p 2222:3000 \
		--env-file ./.env \
		--name auth auth
start:
	docker start auth
stop:
	docker stop auth
rm:
	docker rm auth
rmi:
	docker rmi auth