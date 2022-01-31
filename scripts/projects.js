//
//  This file will handle dynamic creation of project cards
//

// Global to store data from Firebase
var db = null;

// Load the projects from Firebase when the page is loaded
window.addEventListener("load", LoadProjects);


//
// Load the project data from Firebase realtime database
//
function LoadProjects() {
    // Send GET request to the Firebase API
    fetch('https://portfolio-336001-default-rtdb.firebaseio.com/projects.json', {
        method: 'GET',        
        accept: 'application/json',
    })
    .then(function(response) {
        // Check that HTTP response is in 200 range
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        // Return promise as json data object
        return response.json();
    })
    .then(function(data) {
        // Save the data in the db global
        db = data;
        // Call function to generate html content, sending json data 
        GenerateProjectContent(db);
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

    // Iterate through the projects one by one
    for (let i = 0; i < projects.length; i++) {
        let cardContent = "";

        // Start building the card's contents string header
        cardContent +=
        `   <!-- ${projects[i].title} -->
            <div class="project">
                <img src="${projects[i].urls[1].url}" 
                    alt="${projects[i].imageDescriptions[1].description}" id="${projects[i].name}" 
                    onload="PopupImage(document.getElementById('${projects[i].name}'));">
                <div class="content">
                    <h3>${projects[i].title}</h3>
                    <ul class="detailsList">`;

        // Append the description details list
        for (let j = 0; j < projects[i].details.length; j++) {
            cardContent += `<li>${projects[i].details[j].text}</li>`;
        }                

        cardContent += `</ul>
                        <div class="tags">`;

        // Append the skill tags
        for (let k = 0; k < projects[i].skillTags.length; k++) {
            cardContent += `<div class="skillTags ${projects[i].skillTags[k].type}">${projects[i].skillTags[k].name}</div>`;
        }

        // Check if it's a personal project
        if (projects[i].type == "personal") {
            // Select the github logo to append based on dark or light mode theme
            let githubLogo = "https://storage.googleapis.com/edwardboado.dev/images/ui/github.png";
            if(mode == "dark") {
                githubLogo = "https://storage.googleapis.com/edwardboado.dev/images/ui/githubDark.png";
            }
            
            // Append the github logo and link to repo
            cardContent += `
                        </div>                
                        <a href="${projects[i].urls[0].url}" target="_blank">
                            <img src="${githubLogo}" 
                            alt="GitHub" id="github-${projects[i].name}" class="github-project">
                        </a>  
                    </div>
                </div>`;

            // Add the card to the personal project container
            personalProjects.innerHTML += cardContent;

        } else if (projects[i].type == "school") {
            // No public github repo due to academic integrity policies
            cardContent += `
                        </div>                                   
                    </div>
                </div>`;

            // Add the card to the school projects container
            schoolProjects.innerHTML += cardContent;
        }
    }
}