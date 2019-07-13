# grails-angular

This project has a grails backend and angular frontend.  It was setup for me to learn.  
The following command was used for inital setup:

```
grails create-app myapp --profile=angular
```

### Usage
To execute just the server (backend grails) locally run the following command and it will be reach at http://localhost:8080
```
./gradlew server:bootRun
```
To execute only the client side (angular frontend) locally run the following command and it can be reached at http://localhost:4200
```
./gradlew client:bootRun
```
To execute both server and client at the same time run the following command:
```
./gradlew bootRun --parallel
```



### Contact Page Screen Shot:
The site has a Home, About, and Contact page using Angular routing.

![alt text](https://github.com/plhyhc/grails-angular/blob/master/readme_image.png "Screenshot")