# Vote environment
* Vote environment is build using microservices and publish-subscribe pattern. 

* Front end comunicates with back end through gateway rest api.

* All microservices communication are made by assynchronous messages.

* Each microservice has his own database with all necessary information to execute its task.

* If one specific microservice is down, all subscribed messages will be consumed when
it will be active again.
