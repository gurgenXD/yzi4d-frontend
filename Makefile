docker-up: ## Запустить инфраструктуру для локальной разрабоки.
	docker compose -f ./cicd/docker-compose.yml up -d --build