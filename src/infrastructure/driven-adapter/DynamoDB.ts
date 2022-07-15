import AWS from "./aws";

export class DynamoDB {
    static TABLE_NAME: string = 'table-user'
    private static _INSTANCE: AWS.DynamoDB

    static getInstance (option?: AWS.DynamoDB.ClientConfiguration): AWS.DynamoDB {
        if(this._INSTANCE === undefined){
            this._INSTANCE = new AWS.DynamoDB(option)
        }
        return this._INSTANCE
    }
}


//singleton para instanciar