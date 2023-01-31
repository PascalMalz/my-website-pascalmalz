
let objectNr = 0

function setEventDimension(){
    //1px = 1 day
    
    for (let myEvent of events){
        
       objectNr += 1;

        
        //todayToCalc = yyyy + "," + mm + "," + dd;
        currentDayTransformed = new Date();

        

        eventEndDayTransformed = new Date(myEvent.endDate.slice(6,10),myEvent.endDate.slice(3,5)-1,myEvent.endDate.slice(0,2));
        deltaEndToTodayDays = (currentDayTransformed - eventEndDayTransformed)/1000/60/60/24;

        console.log("todayToCalc")

        console.log("currentDayTransformed",currentDayTransformed)

        console.log("eventEndDayTransformed", eventEndDayTransformed)

        console.log("deltaEndToTodayDays", deltaEndToTodayDays)

        if (myEvent.endDate !== "today"){
            

            let newTag = document.createElement("h3");
            let newContent = document.createTextNode(myEvent.endDate + " Finish Activity: " + myEvent.name);

            if (myEvent.activityType == "work"){  
                newTag.setAttribute('style', "position:absolute;" + "top:"+ deltaEndToTodayDays + "px;" + "right:0px;" + "border-top: 6px solid white;" + "text-align:left;");
            }else{
                newTag.setAttribute('style', "position:absolute;" + "top:"+ deltaEndToTodayDays + "px;" + "border-top: 6px solid white;" + "text-align:right;");
            }
            
            newTag.appendChild(newContent);
    
    
            document.getElementById("timeline").append(newTag);

            

        }


        eventStartDayTransformed = new Date(myEvent.startDate.slice(6,10),myEvent.startDate.slice(3,5)-1,myEvent.startDate.slice(0,2));


        deltaStartToTodayDays = (currentDayTransformed - eventStartDayTransformed)/1000/60/60/24;
        
        let newTag = document.createElement("h3");


        let newContent = document.createTextNode(myEvent.startDate + " Start Activity: " + myEvent.name);



        let newDescriptionTag = document.createElement("p");

        newDescriptionTag.innerHTML = myEvent.description;
        newDescriptionTag.id = 'content' + objectNr;




        let newDescriptionTagStandardStyle = "visibility: hidden;" + "width: 45vw;" + "position:absolute;" + "transform: translate(0, -50%);" + "padding: 2vw;" + "box-sizing: border-box;" + "line-height: 2rem;" + "border-radius: 2vw;" + "background-color: black;" + "color: white;" + "box-shadow: 8px 8px 5px 0 rgba(0,0,0,0.5);" + "border:6px solid white;";

        let newCanvasTag = document.createElement("canvas");
        newCanvasTag.id = 'gameCanvas';

        let newExpandImgBtn = document.createElement('input');
        newExpandImgBtn.id = 'click' + objectNr;
        newExpandImgBtn.setAttribute('type', 'image');
        //let btnStyle ="position:absolute;" + "top:" + (deltaEndToTodayDays + (deltaStartToTodayDays - deltaEndToTodayDays + 1) / 2) + "px;" + "height:2.5vw;" + "width: 2.5vw;" + "transform: translate(0px, -50%);";
        newExpandImgBtn.src = "/images/lupe.png";

        let eventIndexParam = objectNr;
        
        let maxHeight

        if(myEvent.endDate !== "today"){
            maxHeight = (deltaStartToTodayDays - deltaEndToTodayDays -1) + "px";
        }else{
            maxHeight = (deltaStartToTodayDays - 1) + "px";
        }

        newDescriptionTag.setAttribute("initMaxHeight", maxHeight)
        setTimeout(setInitialTop,0)
        function setInitialTop(){
        newDescriptionTag.setAttribute("initTop", parseInt(document.getElementById("content"+ eventIndexParam).style.top));
        }
        newExpandImgBtn.addEventListener('click', descriptionSizing)
        newDescriptionTag.addEventListener('click', descriptionSizing)

        function descriptionSizing(){
            if(document.getElementById("content"+ eventIndexParam).style.maxHeight == "unset"){
                document.getElementById("content"+ eventIndexParam).style.top = document.getElementById("content"+ eventIndexParam).getAttribute("initTop") + "px";
                document.getElementById("content"+ eventIndexParam).style.maxHeight = document.getElementById("content"+ eventIndexParam).getAttribute("initmaxheight");
                document.getElementById("content"+ eventIndexParam).style.zIndex = "0";
            }else{
                document.querySelectorAll("[id^=content]").forEach(function(element){
    
                    if(element.style.maxHeight == "unset"){
                        element.style.top = element.getAttribute("initTop") + "px";
                        element.style.maxHeight = element.getAttribute("initmaxheight");
                        element.style.zIndex = "0";
                    }
                });
        
                document.getElementById("content"+ eventIndexParam).style.maxHeight = "unset";
                document.getElementById("content"+ eventIndexParam).style.zIndex = "999";
                setTimeout(checkOverflow,0);
                let topDistance = parseInt(document.getElementById("content"+ eventIndexParam).getAttribute("initTop"));
                let thisClientHeight = parseInt(document.getElementById("content"+ eventIndexParam).clientHeight);
                function checkOverflow(){
                    if(topDistance - thisClientHeight / 2 < 0 ){
                        document.getElementById("content"+ eventIndexParam).style.top = topDistance + (topDistance - thisClientHeight / 2) * -1 +"px";
                    }
                }
            }
        }

        


        if (myEvent.activityType !== "work"){  
            
            newTag.setAttribute('style', "position:absolute;" + "top:" + deltaStartToTodayDays + "px;" + "border-bottom: 6px solid white;" + "transform: translate(0px, -100%);" + "text-align:right;");

            newCanvasTag.setAttribute('style', "position:absolute;" + "top:" + deltaEndToTodayDays + "px;" + "height:" + (deltaStartToTodayDays - deltaEndToTodayDays) + "px;" + "width: 45vw;");
            newCanvasTag.height = deltaStartToTodayDays - deltaEndToTodayDays;
            newCanvasTag.width  = window.innerWidth / 100 * 45;

            newDescriptionTag.setAttribute('style', newDescriptionTagStandardStyle + "top:" + (deltaEndToTodayDays + (deltaStartToTodayDays - deltaEndToTodayDays) / 2) + "px;" + "left:2.5vw;" + "max-height:" + (deltaStartToTodayDays - deltaEndToTodayDays) + "px;" + "height:auto;");

            newExpandImgBtn.setAttribute("style", "visibility: hidden;" +  "position:absolute;" + "top:" + (deltaEndToTodayDays + (deltaStartToTodayDays - deltaEndToTodayDays) / 2) + "px;" + "height:2.5vw;" + "width: 2.5vw;" + "transform: translate(0px, -50%);" + "left:0;");
        }else{
            newTag.setAttribute('style', "position:absolute;" + "top:" + deltaStartToTodayDays + "px;" + "right:0px;" + "border-bottom: 6px solid white;" + "transform: translate(0px, -100%);" + "text-align:left;");

            newCanvasTag.setAttribute('style', "position:absolute;" + "top:" + deltaEndToTodayDays + "px;" + "right:0px;" + "height:" + (deltaStartToTodayDays - deltaEndToTodayDays) + "px ;" + "width: 45vw;");
            newCanvasTag.height = deltaStartToTodayDays - deltaEndToTodayDays;
            newCanvasTag.width  = window.innerWidth / 100 * 45;
            newCanvasTag.setAttribute('custom_key', "work");

            newDescriptionTag.setAttribute('style', newDescriptionTagStandardStyle + "top:" + (deltaEndToTodayDays + (deltaStartToTodayDays - deltaEndToTodayDays) / 2) + "px;" + "right:2.5vw;" + "max-height:" + (deltaStartToTodayDays - deltaEndToTodayDays) + "px ;" + "height:auto;");

            newExpandImgBtn.setAttribute("style", "visibility: hidden;" +  "position:absolute;" + "top:" + (deltaEndToTodayDays + (deltaStartToTodayDays - deltaEndToTodayDays + 1) / 2) + "px;" + "height:2.5vw;" + "width: 2.5vw;" + "transform: translate(0px, -50%);" + "right:0;");
        }

        if (myEvent.endDate == "today"){

            if (myEvent.activityType !== "work"){  
                
                newCanvasTag.setAttribute('style', "position:absolute;" + "top:" + 0 + "px;" + "height:" + (deltaStartToTodayDays - 0) + "px;" + "width: 45vw;")
                newCanvasTag.height = deltaStartToTodayDays;
                newCanvasTag.width  = window.innerWidth / 100 * 45;

                newDescriptionTag.setAttribute('style', newDescriptionTagStandardStyle + "top:" + (deltaStartToTodayDays / 2) + "px;" + "left:2.5vw;" +"max-height:" + (deltaStartToTodayDays) + "px;" + "height:auto;")

                newExpandImgBtn.setAttribute("style", "visibility: hidden;" +  "position:absolute;" + "top:" + (deltaStartToTodayDays / 2) + "px;" + "height:2.5vw;" + "width: 2.5vw;" + "transform: translate(0px, -50%);" + "left:0;"+ "top:" + (deltaStartToTodayDays / 2));
            }else{
                newCanvasTag.setAttribute('style', "position:absolute;" + "top:" + 0 + "px;" + "right:0px;" + "height:" + (deltaStartToTodayDays - 0) + "px;" + "width: 45vw;");
                newCanvasTag.height = deltaStartToTodayDays;
                newCanvasTag.width  = window.innerWidth / 100 * 45;
                newCanvasTag.setAttribute('custom_key', "work");

                newDescriptionTag.setAttribute('style', newDescriptionTagStandardStyle + "top:" + (deltaStartToTodayDays / 2) + "px;" + "right:2.5vw;" + "max-height:" + (deltaStartToTodayDays) + "px;" + "height:auto;");
                
                newExpandImgBtn.setAttribute("style", "visibility: hidden;" + "position:absolute;" + "top:" + (deltaStartToTodayDays / 2) + "px;" + "height:2.5vw;" + "width: 2.5vw;" + "transform: translate(0px, -50%);" + "right:0;"+ "top:" + (deltaStartToTodayDays / 2));
            }
        }

        newTag.appendChild(newContent);

        document.getElementById("timeline").append(newTag, newCanvasTag, newDescriptionTag, newExpandImgBtn);
    }

}
setEventDimension()
