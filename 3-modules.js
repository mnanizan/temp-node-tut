// when using built-in module you can directly call the module name without the './'
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method ruturn the system up-time in seconds
console.log(`The System UpTime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.totalmem()
}
console.log(currentOS)




