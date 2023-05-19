

mongo.connect("mongodb://127.0.0.1:30001,127.0.0.1:30002,127.0.0.1:30003/hello?replicaSet=my-mongo-set").then(()=>{console.log("SS")}).catch(()=>{console.log("false")})

/***
 * this Connection Url will not works as it likely Secondery nodes responds with the inner-docker master url wich mongo1:27017 to make it works you may resolve this name useing etc/hosts
 * To test the RS get into the docker network with app container and tested the connection string. following the next connect string
 */
require("mongoose").connect("mongodb://127.0.0.1:30001,127.0.0.1:30002,127.0.0.1:30003/test?replicaSet=rs0").then(()=>{console.log("OK")}).catch((e)=>{console.log(e.message)})


require("mongoose").connect("mongodb://mongo1:27017,mongo2:27017,mongo3:27017/test?replicaSet=rs0").then(()=>{console.log("OK")}).catch((e)=>{console.log(e.message)})