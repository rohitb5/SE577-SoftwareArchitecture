SHELL := /bin/bash

.PHONY: help
help:
	@echo "Usage make <TARGET>"
	@echo ""
	@echo "  Targets:"
	@echo "     dev-server   		Run the server in dev mode, auto-reload"
	@echo "     build-server		Build the server components -> /dist/spa"
	@echo "     docker-server		Dockerize the server -> code in /dist/spa"
	@echo "     docker-run			Run server container"
	@echo "     docker-run-d		Run server detached"


.PHONY: dev-server
dev-server:
	quasar dev

.PHONY: build-server
build-server:
	quasar build

.PHONY: run
run:
	go run src/bcservice.go

.PHONY: run-server
run-server:
	(cd ./bin; ./bcservice)

.PHONY: docker-server
docker-server:
	docker build --rm=true -t architecting-software/se577-demo-app -f ./Docker/Dockerfile .

.PHONY: docker-run
docker-run:
	docker run --rm -p 9080:9080 architecting-software/se577-demo-app

.PHONY: docker-run-d
docker-run-d:
	docker run -d --rm -p 9080:9080 architecting-software/se577-demo-app