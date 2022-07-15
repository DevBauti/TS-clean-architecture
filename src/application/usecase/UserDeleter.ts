import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserGetterById } from "../../domain/services/UserGetterById";

export class UserDeleterUseCase {
  private _userRepository: UserRepository;
  private _userGetterById: UserGetterById;

  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._userGetterById = new UserGetterById(userRepository);
  }
  
  async run(userID: string): Promise<User> {
    const userToDelete = await this._userGetterById.run(userID);
    await this._userRepository.delete(userToDelete);
    return userToDelete;
  }
}
