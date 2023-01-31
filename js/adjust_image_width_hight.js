

window.onresize = function() {
  setTimeout(function() {
    
    //console.log("hallo resize? imageTags = ", imageTags)
    console.log(document.querySelectorAll('[id^=image_self]')[0])
    document.querySelectorAll('[id^=image_self]').forEach(function callSizing(element){
      sizing(element);
    });
  },0); 
};


sizing = function (imgTag){
  console.log("Image Resizing");
  console.log("imgTag",imgTag);
  var imageContainer = imgTag.parentNode;
  imageContainer.style.flexBasis = "initial";
  console.log(imgTag.src);
  imageFlexContainerClientHight = imageContainer.clientHeight;
  imageFlexContainerClientWidth = imageContainer.clientWidth;
  let imageFlexContainerRatio = imageFlexContainerClientHight / imageFlexContainerClientWidth;
  let imageHeight = imgTag.naturalHeight;
  let imageWidth = imgTag.naturalWidth;
  let imageRatio = imageHeight / imageWidth;
  if (imageRatio > imageFlexContainerRatio) {
    var imageClientHeight = imageFlexContainerClientWidth * imageFlexContainerRatio;
    var imageClientWidth = imageClientHeight / imageRatio;
    console.log(imageClientHeight);
    console.log(imageClientWidth);

    imgTag.style.width = imageClientWidth.toString().concat("px");
    imgTag.style.height = imageClientHeight.toString().concat("px");
    imageContainer.style.flexBasis = imageClientHeight.toString().concat("px");
  };
   if (imageRatio < imageFlexContainerRatio) {
    var imageClientWidth = imageFlexContainerClientWidth;
    var imageClientHeight = imageClientWidth * imageRatio;
    console.log(imageClientHeight);
    console.log(imageClientWidth);
    imgTag.style.width = imageClientWidth.toString().concat("px");
    imgTag.style.height = imageClientHeight.toString().concat("px");
    imageContainer.style.flexBasis = imageClientHeight.toString().concat("px");
    };
};
