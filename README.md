# Crud typescript - Clean Architecture

Clean architecture practice in Typescript. It implements memory saving and console access, in addition to an api built with Express with storage in DynamoDB (aws).

# Folder structure 

### src
#### domain
    |-entities
            user.ts
    |-exceptions
            exception.ts
            userAlreadyExistsException.ts
            UserNotFoundExcetion.ts
    |-repositories
            UserRepository.ts
    |-services
            ExistUserByUserName.ts
            UserGetterById.ts
#### application
    |-usecase
            userCreator.ts
            userDeleter.ts
            userGetter.ts
            userUpdater.ts
#### infraestructure
    |-driven-adapter
            aws.ts
            dynamoDB.ts
    |-driving-adapters
        |-api-rest
            |-controllers
                |-user
                        createUserController.ts
                        deleteUserController.ts
                        getAllUserController.ts
                        updateUserController.ts
                controllers.ts
            |-routes
                    routes.ts
                    user-routes.ts
            dataBackendApp.ts
            server.ts
            start.ts
        |-console
                console.ts
    |-implementations
        |-aws
            |-dynamo-db
                    DynamoDBUserRepository.ts
        |-inMemory
                inMemoryUserRepository.ts


###### A bit long i know