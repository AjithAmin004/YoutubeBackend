import "dotenv/config";
import dbConnection from './db/index.js'
import { app } from './app.js';

const PORT = process.env.PORT || 8000;

try{
await dbConnection();
app.listen(PORT,()=>{
    console.log('listning on port', PORT)
})
}catch(err){
    console.log('error occured while connection')
}