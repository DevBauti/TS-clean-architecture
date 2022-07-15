import path from "path";
import * as dotenv from 'dotenv'
import { DataBackendApp } from "./DataBackendApp";


// launch
try{
    dotenv.config({
        path:path.resolve(__dirname, '../../../../.env')
    })
    new DataBackendApp().start()
}catch(error){
    console.log(error);
}