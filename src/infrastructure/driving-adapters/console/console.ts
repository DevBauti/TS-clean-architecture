import path from "path";
import * as dotenv from 'dotenv'
import { UserCreatorUseCase } from "../../../application/usecase/UserCreator";
import { User } from "../../../domain/entities/User";
// import { InMemoryUserRepository } from "../../../infrastructure/implementations/inMemory/inMemoryUserRepository";
import { DynamoDBUserRepository } from "../../../infrastructure/implementations/aws/dynamo-db/DynamoDBUserRepository";
import { UserGetterUseCase } from "../../../application/usecase/UserGetter";
import { UserUpdaterUseCase } from "../../../application/usecase/UserUpdater";
import { UserDeleterUseCase } from "../../../application/usecase/UserDeleter";

// es una arrow function que se ejecuta como promise de inmediato
// es una IIFE immediately-invoked Function Expressions
(async () => {
  dotenv.config({
    path:path.resolve(__dirname, '../../../../.env')
  })
  // Cambie de memory a Dynamo
  const DynamoDBUserRepo = new DynamoDBUserRepository();

  // create user
  const userCreatorUseCase = new UserCreatorUseCase(DynamoDBUserRepo);
  const userToCreate: User = {
    name: "lucian",
    age: 34,
    username: "Negri",
    id: "1",
  };
  await userCreatorUseCase.run(userToCreate);
  // get user
  const userGetterUseCase = new UserGetterUseCase(DynamoDBUserRepo);
  const users = await userGetterUseCase.run();
  console.log(users);
  // update
  const userUpdaterUseCase = new UserUpdaterUseCase(DynamoDBUserRepo);

  await userUpdaterUseCase.run({
    id: "1",
    username: "adc",
  });
  const users2 = await userGetterUseCase.run();
  console.log(users2);
  // deleted a user
  const userDeletedUseCase = new UserDeleterUseCase(DynamoDBUserRepo);
  await userDeletedUseCase.run("1");

  const users3 = await userGetterUseCase.run();
  console.log(users3);
})();

//  Punto de entrada "Consola"
