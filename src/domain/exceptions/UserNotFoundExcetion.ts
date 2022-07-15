
export class UserNotFoundExcetion extends Error {
  constructor() {
    super("Not found user");
  }
}
