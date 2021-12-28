//
//  This file will handle dynamic creation of project cards
//

// Listen for page load
window.addEventListener("load", LoadProjects);


//
// Load the project data from firebase realtime database
//
function LoadProjects() {
    // Send GET request to the firebase API
    fetch('https://portfolio-336001-default-rtdb.firebaseio.com/projects.json', {
        method: 'GET',        
        accept: 'application/json',
    })
    .then(function(response) {
        // Check that the response is in 200 range
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        // Return promise as json data
        return response.json();
    })
    .then(function(data) {
        // Call function to generate html content, sending json data 
        GenerateProjectContent(data);
    })
    .catch(function(error) {
        // Log any errors
        console.log(error);
    });
}


//
//  Take the json data and generate the html project card content
//
function GenerateProjectContent(data){
    const projects = data;
    
    let personalProjects = document.getElementById("personal");
    let schoolProjects = document.getElementById("school");

    var cardContent = '';


    const AppendContent = projects => {
        // Create elements needed to build a card
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        // Set content and attributes
        h3.innerHTML = projects.title;
        p.classList.add("content")
        p.innerHTML = projects.name;
        // Append newly created elements into the DOM
        personalProjects.append(div);
        div.append(h3);
        div.append(p);
        div.classList.add("project");
    };
      
    data.forEach(projects => AppendContent(projects));
      
}

// Create class style 

// var style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = '.cssClass { color: #F00; }';
// document.getElementsByTagName('head')[0].appendChild(style);

// Add the class
// document.getElementById('someElementId').className = 'cssClass';




// var titlearray =["css","js","python","java","android","jquery","ruby"];
// var descriptionarray =["css style","js program","python code","java objects","android program","jquery objects","ruby code"];

// var dynamic = document.querySelector('.container');  
// for (var i = 0; i < titlearray.length; i++) {
//   var fetch = document.querySelector('.container').innerHTML;  
//   dynamic.innerHTML = `<div id="cards${i}" class="boxes">
//       <div class="box-content">
//         <h2>${titlearray[i]}</h2>
//         <p>
//           ${descriptionarray[i]}
//         </p>
//         <a class="showmore" href="#">ReadMore</a>
//       </div>
//     </div>` + fetch ; 
//     var bgimg = document.getElementById(`cards${i}`);
//     bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
// }