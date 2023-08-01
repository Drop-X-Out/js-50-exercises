async function fetchData(){
try{
    let response =await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
}
catch(error){
    console.error("Error Fetching Data:" ,error)
}
}


fetchData();