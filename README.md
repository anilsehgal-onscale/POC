# OnScale POC
This repo contains 4 projects for supporting different functions and platforms.

## Build Steps
1. Build the `onscale-angular-poc` project per instructions in the project ReadMe.
2. Copy the contents of the `dist` folder in the project `onscale-angular-poc`.
3. Create a directory called `app` in the root of `onscale-node-docker-poc` and paste the copied contents into this directory.
The required file structure in the `onscale-node-docker-poc` root should look like:
- Dockerfile
- Server.js
- package-lock.json
- package.json
- app directory

Contents of the `app` directory should look like:
- index.html
- lib directory

Contents of `lib` directory should be some .js and .js.map files.

4. The desktop and android projects can be built in any order after step 3.

## Docker commands
Go to the `onscale-node-docker-poc` root and run:
1. Docker build command:
`docker build -t "angular-node" .`
2. Docker run command:
`docker run -d -p 8080:8080 "angular-node:latest"`
3. The same commands can be run on a remote server to mimic a remote site environment as well.
The source bundle as described in step 3 should be the source transferred to the remote machine before running the docker commands.

