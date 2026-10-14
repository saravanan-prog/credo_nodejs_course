const storage = []

const currentTimeStamp = new Date() 
const after10days = currentTimeStamp.getDate() + 10


const webRequest = {
    name : "Ramesh",
    email : "ramesh@gmail.com",
    password:"Test@123",
    createdBy: new Date()
}

if( after10days === webRequest.createdBy.getDate() )
    storage.push(webRequest)

if(storage.length !=0)
    console.log("Registration successfully")
else
    console.log("Registragtion failed")



