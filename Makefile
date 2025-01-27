CONTAINER_NAME=quick-dialer

setup-container:
	@docker run -itd --name $(CONTAINER_NAME) --network=host -p 19000:19000 -p 19001:19001 -v $$(pwd):/app -w /app node:lts-alpine

into-container:
	@docker exec -it quick-dialer sh
