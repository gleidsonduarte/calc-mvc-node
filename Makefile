PACKAGE_MANAGER = yarn

default:
	@echo "Hello world!"

# Transpil and build the project in js.
build:
	@tsc -p .

# Runs the production environment
prod:
	node dist/server.js

# Run development environment.
dev:
	@$(PACKAGE_MANAGER) nodemon src/server.ts --ignore src/tests

# Run development environment in debug module.
debug:
	@$(PACKAGE_MANAGER) nodemon --inspect=3002 -e ts --exec node -r ts-node/register src/server.ts

# Performs unit and integration tests.
test:
	@$(PACKAGE_MANAGER) mocha -r ts-node/register **/*.spec.ts

# Run the load test.
loadtest:
	@$(PACKAGE_MANAGER) artillery run artillery.yml 

# Creates the containers
up:
	@docker-compose up -d

# List the containers
list:
	@docker-compose ps

# Clean everything
clean:
	@docker-compose down