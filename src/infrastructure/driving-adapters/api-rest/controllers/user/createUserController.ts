import { NextFunction, Request, Response } from "express";
import { DynamoDBUserRepository } from "../../../../implementations/aws/dynamo-db/DynamoDBUserRepository";
import { UserCreatorUseCase } from "../../../../../application/usecase/UserCreator";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { username, age, name } = req.body;

  const dynamoDBUserRepo = new DynamoDBUserRepository();
  const userCreatorUseCase = new UserCreatorUseCase(dynamoDBUserRepo);

  try {
    const userCreated = await userCreatorUseCase.run({
      id: uuidv4(),
      name,
      username,
      age,
    });

    res.json(userCreated);
    return;
  } catch (e) {
    return next(e);
  }
};
