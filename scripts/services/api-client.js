//Network Call Code
async function  doNetworkCall(){
    try{
    const URL= "https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json"
    const response= await fetch(URL); //Block
    const object= await response.json(); //Block
    return(object); //Wrap Promise
    }
    catch(err){
        console.log("Some problem in fetching API Call",err)
        throw err;
    }
//     const promise= fetch(URL);
//     promise.then(function(response){
//         console.log(response)
//         const promise2= response.json(); //Deserialization (JSON to Object)
//         promise2.then(data=>("Data is ",data))
//         .catch(e=>("JSON Parse Error",e))
//     }).catch(function(err){
//         console.log('Error',err)
//     });
// 
}
export default doNetworkCall;