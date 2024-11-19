# ☁ Clowder Backend

## Prerequisites  
This README assumes you have Docker installed. If you do not, please read [this](https://docs.docker.com/engine/install/) manual, based on your operating system. It will cover setting up and testing your very own Docker instance

## Setup
### Setting up the database

1. Ensure that Docker is started. This is down to how you have installed Docker. You can test Docker is online by running `docker info`
2. Run `npm run setup-db`.
3. Run `docker ps` to see the containers, and copy the container ID
4. Run `npm run get-docker-ip [CONTAINER_ID]`, replacing `[CONTAINER_ID]` with the one copied from the previous step
5. Save the IP output from the above command - It will be used later

### Setting up the environment for local development
1. Create a new `.env` file at the root of the project
2. Refer to the `example.env` file, replacing values where required
    1. The `DATABASE_URL` will be constructed of values from `docker-compose.local.yaml` and the output of previous steps.
        1. `POSTGRES_USER` will be our `USERNAME`
        2. `POSTGRES_PASSWORD` will be our `PASSWORD`
        3. `POSTGRES_DB` will be our `DATABASE`
        4. The IP copied from [Setting up the database](###-Setting-up-the-database) will be our `HOST`