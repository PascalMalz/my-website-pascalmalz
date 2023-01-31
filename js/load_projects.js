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
                      <img id="arrow_expand_${projectCount}" class="arrow_expand" src="/images/arrow_expand.png">
                    </div>
                </div>
                <div id="expand_hide${projectCount}" style="display:none">
                <h3 id="description_${projectCount}"class="content_heading1" style="">Description</h3>
                <div id="card1_${projectCount}" class="card grid_item1" style="width:100%;">
                    <h3 class="content_heading">Description</h3>
                    ${mediaTag}
                    <span class="content_text"> ${project.content} 
                    </span>
                </div>
                <h3 id="heading2_${projectCount}"class="content_heading2" style=";"></h3>
                <div id="${project.title}" class="card grid_item2" style=";">
                    <h3 id="content_heading" class="content_heading"></h3>
                    <div class="image_flex_container" id="image_flex_container">
                      <img class="image_self" id="image_self${projectCount}" src="/images/1.jpeg" onload="setTimeout(loadImageSource('${project.title}', currentObject = 0,0))">
                      <img class="image_self" style="height:15%;width:auto;opacity:0.5;pointer-events:none;" src="/images/lupe_img.png">
                      </div>
                    <input class="arrow_right" id="arrow_right${projectCount}" type="image" src="images/Arrow_slide_show_right_white.png" alt="-->"/>
                    <input class="arrow_left" id="arrow_left${projectCount}" type="image" src="images/Arrow_slide_show_left_white.png" alt="-->"/>
                    <span id="content_text" class="content_text"></span>
                </div>
                </div>`
                
            
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
            document.querySelector(`#${project.title}`).append(newScript)

            document.querySelector(`#${project.title}`).setAttribute('slideID',projectCount);

            let projectCountIntern = projectCount;
            
              document.getElementById(`expand_${projectCountIntern}`).addEventListener('click', expand_and_change_image) 

                function expand_and_change_image(){
                  console.log("das wird jetzt dargestellt:","description_${projectCountIntern}",`description_${projectCountIntern}`, "`card1_${projectCountIntern}`" , `card1_${projectCountIntern}`, "`heading2_${projectCountIntern}`", `heading2_${projectCountIntern}`, "`${project.title}`",`${project.title}`)
                  document.getElementById(`expand_hide${projectCountIntern}`).style.display = 'initial';
              
                  $(document).ready(function(){
                    this.getElementById(`arrow_expand_${projectCountIntern}`).setAttribute('src', '/images/escape_button.png');
                    document.getElementById(`expand_${projectCountIntern}`).removeEventListener('click', expand_and_change_image)
                    document.getElementById(`expand_${projectCountIntern}`).addEventListener('click', shrink) 
                  });
                }
                function shrink(){
                  $(document).ready(function(){
                    this.getElementById(`arrow_expand_${projectCountIntern}`).setAttribute('src', '/images/arrow_expand.png');
                  document.getElementById(`expand_hide${projectCountIntern}`).style.display = 'none';

                  document.getElementById(`expand_${projectCountIntern}`).removeEventListener('click', shrink)
                  document.getElementById(`expand_${projectCountIntern}`).addEventListener('click', expand_and_change_image) 
                });
                }
             
            
});

