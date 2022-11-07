
run:
	docker-compose --project-name="auth" up -d \
	&& npm run start
dev:
	docker-compose --project-name="auth" up -d \
	&& npm run start:dev
stop:
	docker-compose --project-name="auth" down
dci:
	docker ps \
	&& docker ps -a \
	&& docker images \
	&& docker volume ls

# OLD	
old-build:
	docker build -t auth .
old_run:
	docker run -d \
		-p 2222:3000 \
		--env-file ./.env \
		--name auth auth
		--rm \
old_start:
	docker start auth
old_stop:
	docker stop auth
rm:
	docker rm auth
rmi:
	docker rmi auth
old-dev: 
	docker run -d \
		-p 5432:5432 \
		--env-file .env.db \
		--name db postgres \
		--rm \
	&& npm run start:dev