build:
	docker build -t nest .
run:
	docker run -d \
		--rm \
		-p 80:3000 \
		--env-file ./.env \
		--name nest nest
run-dev:
	docker run -d \
		--rm \
		-p 80:3000 \
		-v ${PWD}/src:/usr/src/appDF/src \
		--env-file ./.env \
		--name nest nest
run-file:
	docker run -d \
		--rm \
		-p 3000:3000 \
		-v ${PWD}/data:/usr/src/appDF/data \
		--env-file ./.env \
		--name nest nest		
start:
	docker start nest
stop:
	docker stop nest
rm:
	docker rm nest
rmi:
	docker rmi nest