


let imageID;



function loadImageSource(slideTagName, currentObject){

    //Determines the current object in slide show
    if (currentObject !== undefined){
    window[slideTagName][0] += currentObject;
    };
    if (window[slideTagName][0] < 1){
        window[slideTagName][0] = window[slideTagName].length - 1;
    }else if (window[slideTagName][0] > window[slideTagName].length - 1){ 
        window[slideTagName][0] = 1;
    };
    


    slideContainer = document.getElementById(slideTagName)

    headingTagonBigScreen = slideContainer.previousElementSibling

    headingTagOnSmallScreen = slideContainer.children.content_heading


    imageTag = slideContainer.children.image_flex_container.children[0]

    contentTag = slideContainer.children.content_text


    headingTagonBigScreen.innerText = "Gallery - Slide " + window[slideTagName][0].toString() +  " \/ " + (window[slideTagName].length - 1).toString();

    headingTagOnSmallScreen.innerText = "Gallery - Slide " + window[slideTagName][0].toString() +  " \/ " + (window[slideTagName].length - 1).toString();



    imageID = `image_self${slideContainer.getAttribute('slideID') + "_" + window[slideTagName][0].toString()}`

    imageTag.outerHTML = `<img class="image_self" id="${imageID}" src="${window[slideTagName][window[slideTagName][0]].src}" style="cursor:zoom-in;" onload="sizing(this)"> </div>`;
                                         
        //if the image ID was not already processed add an event listener.

    

    contentTag.innerText = window[slideTagName][window[slideTagName][0]].text;

}
