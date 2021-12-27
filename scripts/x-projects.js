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
    
    let personalProjects = document.getElementById("projects-personal");
    let schoolProjects = document.getElementById("projects-school");

    var cardContent = '';


    // Iterate through the projects one by one
    for (let i = 0; i < projects.length; i++) {

        cardContent +=
        `   <!-- ${projects[i].title} -->
            <div class="project">
                <img src="https://storage.googleapis.com/edwardboado.dev/images/${projects[i].name}.png"
                    alt="${projects[i].title}" id="image-${projects[i].name}" 
                    onload="PopupImage(document.getElementById('image-${projects[i].name}'));">
                <div class="content">
                    <h3>${projects[i].title}</h3>
                    <ul>`;


        for (let j = 0; j < projects[i].descriptions; j++) {
            cardContent += `<li>${projects[i].descriptions[j]}</li>`
        }

        cardContent += `
                    </ul>
                    <div class="tags">`;

        for (let k = 0; k < projects[i].skillTags; k++) {
            cardContent += `<div class="skillTags ${projects[i].skillTags[j].type}">${projects[i].skillTags[j].name}</div>`;
        }

        let githubLogo = "https://storage.googleapis.com/edwardboado.dev/images/github.png";
        if(mode == "dark") {
            githubLogo = "https://storage.googleapis.com/edwardboado.dev/images/githubDark.png";
        }
        
        cardContent += `
                    </div>                
                    <a href="${projects[i].urls[0]}" target="_blank">
                        <img src="${githubLogo}" 
                        alt="GitHub" id="github-${projects[i].name}" class="github-project">
                    </a>  
                </div>
            </div>`;
    }

    personalProjects.innerHTML += cardContent;

    
    const project = document.querySelector('.project');
    project.style.flex = '1 1 35rem';
    project.style.overflow = 'hidden';
    project.style.margin = '4rem';
    project.style.width = '30%';
    
    console.log(cardContent);
}