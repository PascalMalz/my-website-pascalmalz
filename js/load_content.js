


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

    console.log("src", window[slideTagName][window[slideTagName][0]], "slideTagName", slideTagName)


    imageID = `image_self${slideContainer.getAttribute('slideID') + "_" + window[slideTagName][0].toString()}`

    imageTag.outerHTML = `<img class="image_self" id="${imageID}" src="${window[slideTagName][window[slideTagName][0]].src}" style="cursor:zoom-in;" onload="sizing(this)"> </div>`;
                                         
        //if the image ID was not already processed add an event listener.

    document.getElementById(imageID).addEventListener('click', function(event){
            newForeBackground = document.createElement('div');
            newForeBackground.setAttribute('style',"position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:998;background:rgba(255,255,255,0.9");
            newForeBackground.id = 'newForeBackground';

            newFullSizeImage = document.createElement('img');
            newFullSizeImage.setAttribute('style',"position:fixed;top:50vh;left:50vw;transform:translate(-50%, -50%);height:100vh;width:auto;max-width:100vw;z-index:999;cursor:zoom-out;");
            
            if (checkChoosePathAvailable(event)){
                newFullSizeImage.setAttribute('src',checkChoosePathAvailable(event)[0].src);
            }
            
            newFullSizeImage.id = 'fullSizeImage';
            newFullSizeImage.setAttribute('onClick',"closeFullSizeImage(this)");
            newFullSizeImage.setAttribute('onload',"sizing(this)");

            newForeBackground.append(newFullSizeImage);


            newEscapeButton = document.createElement('img');
            newEscapeButton.setAttribute('style',"position:fixed;top:20px;right:20px;height:100px;width:100px;z-index:999;");
            newEscapeButton.setAttribute('src','/images/escape_button.png');
            newEscapeButton.id = 'escapeButton';
            newEscapeButton.setAttribute('onClick',"closeFullSizeImage(this)");
            
            $('body').append(newForeBackground, newEscapeButton);    
    });

    contentTag.innerText = window[slideTagName][window[slideTagName][0]].text;

}

function closeFullSizeImage(id){
    $('#newForeBackground').remove();
    $('#escapeButton').remove();
    console.log("this is the id",id, "really")

}

function checkChoosePathAvailable(event){
    var path = event.path || (event.composedPath && event.composedPath());
    if (path) {
        return path
}   else {
        condole.log("This browser does not support event path function")
}
}