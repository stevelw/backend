<h1 align="center">☁ Clowder - Backend</h1>
<p align="center">
<img src="https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff">
<img src="https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white">
<img src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff">
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white">
</p>

---

## Setting up for local development

### Prerequisites

This README assumes you have Docker installed. If you do not, please read [this](https://docs.docker.com/engine/install/) manual, based on your operating system. It will cover setting up and testing your very own Docker instance

### Steps

#### Cloning and initial setup

1. Clone the repository by executing `git clone https://github.com/clowder-cloud/backend.git`
2. Enter the cloned repository locally, `cd backend`
3. Install all dependencies, `npm i`

#### Setting up the database

1. Ensure that Docker is started. This is down to how you have installed Docker. You can test Docker is online by running `docker info`
2. Run `npm run setup-db`.
3. Run `docker ps` to see the containers, and copy the container ID
4. Run `npm run get-docker-ip [CONTAINER_ID]`, replacing `[CONTAINER_ID]` with the one copied from the previous step
5. Save the IP output from the above command - It will be used later

#### Setting up the environment for local development

1. Create a new `.env` file at the root of the project
2. Refer to the `example.env` file, replacing values where required
   1. The `DATABASE_URL` will be constructed of values from `docker-compose.local.yaml` and the output of previous steps.
      1. `POSTGRES_USER` will be our `USERNAME`
      2. `POSTGRES_PASSWORD` will be our `PASSWORD`
      3. `POSTGRES_DB` will be our `DATABASE`
      4. The IP copied from [Setting up the database](###-Setting-up-the-database) will be our `HOST`

#### Migration and Seeding

> [!WARNING]  
> If at this point you get an error with connecting to the database, try changing the port in the `DATABASE_URL` environment variable to `54320`

1. Run all of the migrations by executing `npx prisma migrate dev`
2. Seed the database with `npx prisma db seed`
3. You can check the database is migrated and seeded by running `npx prisma studio`. This will open an instance of Prisma Studio in your default browser

---

<p align="center">Made with <img height="14" src="https://emoji.lgbt/assets/svg/gay-heart.svg"/> by the Clowder team