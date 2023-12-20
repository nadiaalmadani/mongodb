
const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "mongodb-task"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('error has occured')
    }
    console.log('All Perf')

    const db = res1.db(dbname)


///////////////use insertOne to inet tow person////
//db.collection('users').insertOne({
//    name : 'nadia',
//    age : 30
//},(error , data) => {
//    if(error){
//        console.log('Unable to insert Data')
//    }
//    console.log(data.insertedId)
//})

////db.collection('users').insertOne({
  //  name : 'homam',
  //  age : 26
//},(error , data) => {
  //  if(error){
    //    console.log('Unable to insert Data')
    //}
    //console.log(data.insertedId)
//})
////

////// use insertMany to add 10 people , 5 of them :the age 27 years////
db.collection ('users').insertMany(
    [ {
         name: 'islam',
         age: 27
     },
     {
         name: 'yamam',
         age: 27
     },
     {
         name: 'samih',
         age: 27
     },
     {
         name: 'sundus',
         age: 27
     },
     {
        name: 'naya',
        age: 21
    },
    {
        name: 'mustafa',
        age: 30
    },
    {
        name: 'mila',
        age: 36
    },
    {
        name: 'abd',
        age: 25
    },
    {
        name: 'samah',
        age: 20
    },
     {
         name: 'aya',
         age: 27
     }] , (error,data)=>{
         if(error){
             console.log('Unable to insert data')
         }
         // console.log(data.insertedCount)
     } 
 )   

 /////find who their age's 27 //
 

/*db.collection('users').find({age:27}).toArray((error , users)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log(users)
  })  

  ////////find who their age's 27 and don't release at 3 person//
  db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
    if (error) {
        return console.log('error has occured')
    }
    console.log(users)
  })   */

///////use  &inc operators ///
 /*db.collection("users").updateMany({},{
        $inc : {age : 14}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))
*/
///////use  &inc operators for the 4th docs ///
 /*db.collection("users").updateOne({_id:mongodb.ObjectId("6582c298f9ffb1a612f0f3b4")},{
       $set:{name : "nadia1" },
        $inc:{age : 4}
      })
      .then((data1) =>{console.log(data1.modifiedCount)})
      .catch((error)=> console.log(error))
  
db.collection("users").updateOne({_id:mongodb.ObjectId("6582c298f9ffb1a612f0f3b5")},{
    $set:{name : "nadia2" },
     $inc:{age : 4}
   })
   .then((data1) =>{console.log(data1.modifiedCount)})
   .catch((error)=> console.log(error))

db.collection("users").updateOne({_id:mongodb.ObjectId("6582c3ed5954193e379d2673")},{
    $set:{name : "nadia3" },
     $inc:{age : 4}
   })
   .then((data1) =>{console.log(data1.modifiedCount)})
   .catch((error)=> console.log(error))
  
db.collection("users").updateOne({_id:mongodb.ObjectId("6582c3ed5954193e379d2674")},{
    $set:{name : "nadia4" },
     $inc:{age : 4}
   })
   .then((data1) =>{console.log(data1.modifiedCount)})
   .catch((error)=> console.log(error))
  
 */


////// delete for person who are they 44////

/*db.collection("users").deleteMany({age:44})
   .then((data1) =>{console.log(data1.deletedCount)})
   .catch((error)=> console.log(error))
  */
////// delete for person who are they 41////
/*db.collection("users").deleteMany({age:41})
   .then((data1) =>{console.log(data1.deletedCount)})
   .catch((error)=> console.log(error))
   */





})