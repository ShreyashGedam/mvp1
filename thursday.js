// const express = require("express")

// const mongoose = require("mongoose")

// const app = express()

// app.use(express.json())

// const connect = function()
// {
//     return mongoose.connect("mongodb+srv://shreyash:shreyash@cluster0.b34yl.mongodb.net/test")
// }

// const userschema = new mongoose.Schema(
//     {
//         firstname : {type : String , required : true },
//         lastname : {type : String , required : true},
//         gender : {type : String , required : true},
//         dateofbirth : {type : String , required : true},
//         type : {type : String , required : true}
//     },
//     {
//         timestamps : true,
//         versionKey : false,
//     }
// )

// const user = mongoose.model("user",userschema)

// const studentschema = new mongoose.Schema(
//     {
//         rollid : {type : mongoose.Schema.Types.ObjectId , ref : "user" , required : true},
//         currentbatch : {type : String , required : true},
//         evaluationtype : {type : mongoose.Schema.Types.ObjectId , ref : "evaluation" , required : true}

//     },
//     {
//         timestamps : true,
//         versionKey : false,
//     }
// )

// const studnt = mongoose.model("student",studentschema)

// const batchschema = new mongoose.Schema(
//     {
//         batchname : {type : String , required : true},
//     },
//     {
//         timestamps : true,
//         versionKey : false,
//     }
// )

// const batch = mongoose.model("batch",batchschema)

// const evaluationschema = new mongoose.Schema(
//     {
//         date : {type : String , required : true},
//         instructor : {type : mongoose.Schema.Types.ObjectId,ref : "user" , required : true},
//         batchid : {type : mongoose.Schema.Types.ObjectId,ref : "batch" , required : true}
//     },
//     {
//         timestamps : true,
//         versionKey : false,
//     }
// )

// const evaluation = mongoose.model("evaluation",evaluationschema)

// const submissionschema = new mongoose.Schema(
//     {
//         evaluationid : {type : mongoose.Schema.Types.ObjectId,ref : "evaluation", required : true},
//         studentid : {type : mongoose.Schema.Types.ObjectId , ref : "user" , required : true},
//         marks : {type : Number , required : true},
//     },
//     {
//         timestamps : true,
//         versionKey : false,
//     }
// )

// const submission = mongoose.model("submission",submissionschema)



// app.get("/users", async function(req , res)
// {
//     const userdata = await user.find()
//     return res.send(userdata)
// })

// app.post("/users",async function(req , res)
// {
//     try {
//         const item = await user.create(req.body);
    
//         return res.status(201).send(item);
//       } catch (err) {
//         return res.status(500).send({ message: err.message });
//       }
        
// })

// app.get("/students", async function(req , res)
// {
//     const studentdata = await studnt.find()
//     return res.send(studentdata)
// })

// app.post("/students",async function(req , res)
// {
//     try {
//         const rstudentdata = await studnt.create(req.body);
    
//         return res.status(201).send(rstudentdata);
//       } catch (err) {
//         return res.status(500).send({ message: err.message });
//       }
        
// })

// app.get("/batches", async function(req , res)
// {
//     const batchdata = await batch.find()
//     return res.send(batchdata)
// })

// app.post("/batches",async function(req , res)
// {
//     try {
//         const rbatchdata = await batch.create(req.body);
    
//         return res.status(201).send(rbatchdata);
//       } catch (err) {
//         return res.status(500).send({ message: err.message });
//       }
        
// })

// app.get("/evaluations", async function(req , res)
// {
//     const evaluationdata = await evaluation.find()
//     return res.send(evaluationdata)
// })

// app.post("/evaluations",async function(req , res)
// {
//     try {
//         const revaluationdata = await evaluation.create(req.body);
    
//         return res.status(201).send(revaluationdata);
//       } catch (err) {
//         return res.status(500).send({ message: err.message });
//       }        
// })

// app.get("/submissions", async function(req , res)
// {
//     const submissiondata = await submission.find()
//     return res.send(submissiondata)
// })

// app.post("/submissions",async function(req , res)
// {
//     try {
//         const rsubmissiondata = await submission.create(req.body);
    
//         return res.status(201).send(rsubmissiondata);
//       } catch (err) {
//         return res.status(500).send({ message: err.message });
//       }        
// })

// app.delete("/students/:id" , async function(req , res)
// {
//     try {
//         const user = await studnt.findByIdAndDelete(req.params.id).lean().exec();
//         // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
    
//         return res.status(200).send(user);
//       } catch (err) {
//         return res.status(500).send({ message: err.message });
//       }
// })

// app.get("/students/:id", async function(req , res)
// {
//     const user = await studnt.find({ evaluationtype : req.params.id })
//     return res.send(user)
// })

// app.listen(8000,async function(){
//     await connect()

// console.log("listening on the port")
// })