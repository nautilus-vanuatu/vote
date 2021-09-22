# Vote environment
* Vote environment is build using microservices and publish-subscribe pattern. 

* Front end comunicates with back end through gateway rest api.

* All microservices communication are made by assynchronous messages.

* Each microservice has his own database with all necessary information to execute its task.

* If one specific microservice is down, all subscribed messages will be consumed when
it will be active again.

![estrutura](https://user-images.githubusercontent.com/91090589/134234959-5a0f5335-4953-461d-bd59-2c7773a8e83c.png)

# Stack
* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [NestJS](https://nestjs.com/)
* [NextJS](https://nextjs.org/)
* [Prisma](https://www.prisma.io/)