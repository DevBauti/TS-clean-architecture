
export class UserAlreadyExistsException extends Error {
    constructor(){
        super('User already exists')
    }
}

// extender de Error y punto