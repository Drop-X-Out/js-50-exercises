function makeAPICall(url){
    return fetch(url)
     .then(response => response.json())
 }
 
 function handleData(data){
     console.log('Processed Data',data);
 }
 
 function main(){
 
     const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
     const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';
 
     makeAPICall(apiUrl1).then(handleData).catch(err=>console.log('error'));
 
     makeAPICall(apiUrl2).then(handleData).catch(err=>console.log('error'));
 }
 
 main();