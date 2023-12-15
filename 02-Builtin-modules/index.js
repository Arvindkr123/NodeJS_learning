const { log } = require("console");
const os = require("os");
// console.log(os);

// information about the current user
// const user = os.userInfo();
// console.log(user);

// method return system uptimes in seconds
// console.log(`system uptimes in ${os.uptime()} seconds`);

// current os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
