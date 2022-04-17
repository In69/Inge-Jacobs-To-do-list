const url ="http://localhost:3000/";

//GET DATA 
const getData = async function(){
    const result = await fetch (url, {
        method: "GET",
        headers: {"Content-Type" : "application/json",}
    });  
    const json = await result.json();

    return json;
};

//POST DATA 
const postData = async function(value){
 const data = {description: value, done: false};

    const result = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
   },
 
    });    
    const json = await result.json();
    return json;
};

//PUT DATA
const putData = async function(id,description,done){
    const toDoData = {description: description, done: done};
    const result = await fetch(`${url}${id}`, {
        method: "PUT",
        body: JSON.stringify(toDoData),
        headers: {
            "Content-Type": "application/json"
            
        },
    });
    const json = await result.json();
    return json;
};

//DELETE DATA
const deleteData = async function(id){
  const result =  await fetch(`${url}${id}`, {method: "DELETE",});
  return result;
};