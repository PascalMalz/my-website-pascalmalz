//Slide Tag has to have same name as Array in objects file
//Because of that : contentTag.innerText = window[slideTagName][window[slideTagName][0]].src;
projectCount = 0
projects.forEach(function loadProjects(project) {
        projectCount += 1;
        newHtml = document.createElement('div');
        newHtml.setAttribute('class','grid_flex_container');
        
        //check wether media is video/image
        let mediaExtension = project.mediaCover.substr(project.mediaCover.lastIndexOf(".") + 1);
        console.log(mediaExtension)
        let imageTypes = ["jpeg", "jpg", "svg", "png", "gif"];
        let mediaTag;
        if(imageTypes.includes(mediaExtension)){
          mediaTag = `<div id="image_flex_container1" class="image_flex_container"><img id="image_self${projectCount}" class="image_self" src="${project.mediaCover}" onload="sizing(this)"></div>`
        }else{
          mediaTag = `<video class="video_container" controls><source src="${project.mediaCover}" type="video/mp4">Your browser does not support the video tag.</video>`;
        }



        newHtml.innerHTML  = 
        `<div class="grid_flex_container_header">
                <div class="grid_header" id="expand_${projectCount}">
                  <h2 id="${project.title}${project.title}" style="margin:0;padding:1rem 1rem 1rem 7rem;">${project.title.replace(/_/g, " ")}</h2>
                    <div style="padding:4%">
                    </div>
                </div>
                <div id="expand_hide${projectCount}" style="">
                <div id="card1_${projectCount}" class="card grid_item1" style="width:100%;">
                    <h3 class="content_heading">Description</h3>
                    ${mediaTag}
                    <span class="content_text"> ${project.content} 
                    </span>
                </div>
`
                
            
            document.querySelector('.container_start').append(newHtml);

            //Die jQuery click Event darf erst hinzugefügt werden wenn "button" erstellt sind
            let newScript = document.createElement('script');
            newScript.innerHTML = `
            $(document).ready(function(){             
                $("#arrow_left${projectCount}").click(function(){
                  loadImageSource('${project.title}', currentObject = -1);                           
                });
              });
            $(document).ready(function(){
                $("#arrow_right${projectCount}").click(function(){
                  loadImageSource('${project.title}', currentObject = 1);
                });
              }); 
              `

             
            
});

