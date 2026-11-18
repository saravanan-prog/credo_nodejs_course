import fs from 'fs'
console.log("Start ")
fs.readFile('sara.txt',(err,data)=>{
    if(err)
        throw new Error("Something went wrong");
    else
       console.log("data====>",data)
})
console.log("end ")