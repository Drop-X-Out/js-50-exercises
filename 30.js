async function fetchData(url){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Request failed with status :" +response.status);
        }
        return await(response.json())
    }
    catch(error){
        console.error("Error fetching data:",error)
    }
}

fetchData("https://jsonplaceholder.typicode.com/posts").then(data=>console.log(data));