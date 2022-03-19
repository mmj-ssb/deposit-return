.PHONY: default
default: | help

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: local-install
local-install: ## Installation steps for local development
	cd frontend; yarn install
	cd backend; yarn install

.PHONY: start-local-frontend
start-local-frontend: ## Start local frontend
	cd frontend; yarn start

.PHONY: start-local-backend
start-local-backend: ## Start local frontend
	cd backend; node index.js
