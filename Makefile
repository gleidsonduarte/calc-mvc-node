.PHONY: default build prod dev debug test loadtest up list clean

SHELL := /bin/bash
PACKAGE_MANAGER := yarn

default:
	@echo "Hello world!"

# Transpil and build the project in js.
build:
	@tsc -p .

# Runs the production environment
prod:	dist/server.js
	@node $<

# Run development environment.
dev:	src/server.ts
	@$(PACKAGE_MANAGER) nodemon $< --ignore src/tests

# Run development environment in debug module.
debug:	src/server.ts
	@$(PACKAGE_MANAGER) nodemon --inspect=3002 -e ts --exec node -r ts-node/register $<

# Performs unit and integration tests.
test:
	@$(PACKAGE_MANAGER) mocha -r ts-node/register **/*.spec.ts

# Run the load test.
loadtest:	artillery.yml
	@$(PACKAGE_MANAGER) artillery run $<

# Apenas um exemplo usando máscaras
# Descomente as duas linhas abaixo e digite "make docker-compose" no terminal
#%:	%.yml
#	$@ up -d

# Creates the containers
up:	docker-compose.yml
	docker-compose up -d

# List the containers
list:	docker-compose.yml
	@docker-compose ps

# Clean everything
clean:	docker-compose.yml
	@docker-compose down