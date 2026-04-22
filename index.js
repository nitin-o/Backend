import connectDB from "./src/db/indext.js";
import app from "./src/app.js";
import { PORT } from "./src/constants.js";

connectDB().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server runing is port ${PORT}`);
        
    })

})
.catch((err)=>{
    console.log("mongo db connection failed !!!", err);
})