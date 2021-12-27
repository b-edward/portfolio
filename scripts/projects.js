//
//  This file will handle dynamic creation of project cards
//

window.addEventListener("load", LoadProjects);


// async function GetProjects(url) {

//     const header = {
//         method: 'GET',
//         accept: 'application/json',
//         mode: 'no-cors',
//         cache: 'default',
//         'Access-Control-Allow-Origin': '*', 
//         'Access-Control-Allow-Credentials': true 
//     };

//     const httpRequest = new Request(url, header);

//     try {
//         // Try to get the url 
//         const response = await fetch(httpRequest);
        
//         // If the response is not 200 range, throw exception
//         // if (!response.ok) {
//         //     throw Error(`${response.status} ${response.statusText}`);
//         // }
//         // Return the response
//         return response;
//     } catch (error) {
//         console.log("Error fetching: ", error);
//     }
// }  

async function LoadProjects() {

    fetch('https://storage.googleapis.com/edwardboado.dev/data/projects.json', {
        method: 'GET',        
        accept: 'application/json',
        mode: 'no-cors',
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error(response.ok);
      }
      return response.json();
    })
    .catch(function(error) {
        console.log(error);
    });




    // fetch('https://storage.googleapis.com/edwardboado.dev/data/projects.json', {
    //     method: 'GET',        
    //     accept: 'application/json',
    //     mode: 'no-cors',
    //     cache: 'default',
    //     'Access-Control-Allow-Origin': '*', 
    //     'Access-Control-Allow-Credentials': true 
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data.projects.name);
    // })      
    // .catch(console.error);


}



