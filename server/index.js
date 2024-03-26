const express = require("express");
const connection = require("./dbConnect");
const {userRouter} = require("./routes/user.routes")
const swaggerUI= require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const app = express();
app.use(express.json());
const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Pioneer Labs Assignment",
            version:"1.0.0",
        },
        servers:[
            {url:"http://localhost:2002"},

        ]
    },
    apis:[
        "./routes/*.js"
    ]

}
const openAPI = swaggerJsDoc(options);
app.use("/swagger",swaggerUI.serve,swaggerUI.setup(openAPI));
app.get("/",(req,res)=>{
    res.json("Working Fine");
})

app.use("/", userRouter);
app.listen("2002",async(req,res)=>{
   try{
    await connection;
    console.log("Connected to DB");
    console.log("Server is running on port 2002");
   }
   catch(err){
    console.log(err);
   }
})