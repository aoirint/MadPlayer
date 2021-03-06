ROOT_DIR = $(dir $(realpath $(firstword $(MAKEFILE_LIST))))

docker-build:
	docker build . \
		-t aoirint/madplayer

shell: docker-build
	docker run --rm -it \
		-v "$(ROOT_DIR):/code" \
		aoirint/madplayer \
		bash

start: docker-build
	docker run --rm \
		-v "$(ROOT_DIR):/code" \
		-p "3000:3000" \
		aoirint/madplayer \
		npm run start

build: docker-build
	docker run --rm \
		-v "$(ROOT_DIR):/code" \
		aoirint/madplayer \
		npm run build

test: docker-build
	docker run --rm \
		-v "$(ROOT_DIR):/code" \
		aoirint/madplayer \
		npm run test

lint: docker-build
	docker run --rm \
		-v "$(ROOT_DIR):/code" \
		aoirint/madplayer \
		npm run lint

lint-fix: docker-build
	docker run --rm \
		-v "$(ROOT_DIR):/code" \
		aoirint/madplayer \
		npm run lint-fix
