
process.nextTick(()=> console.log("first"),1000)
process.nextTick(()=> console.log("second"),500)