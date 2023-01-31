
let projects = document.getElementsByTagName("h2");
let projectList = document.getElementById("project_list");

function fillWebsiteOverview(){
    for (let tag of projects){
        let newTag = document.createElement("a");
        let newContent = document.createTextNode(tag.textContent);
        newTag.setAttribute('href', "#" + tag.textContent);
        newTag.appendChild(newContent);
        projectList.append(newTag)
    
    }
}

//fillWebsiteOverview()