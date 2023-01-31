
//depending summary_objects.js
events.forEach(function(event, index){
if(events.length-1 == index){
    //canvas draw - same size as innerhtml


    let todayCalc = new Date();
    todayCalc.setDate(1)
    let msecToDayFactor = 1000*60*60*24;
    let todayRaw = new Date();
    documentHeightPixel = $(document).height();
    let nextMonthsPixel = 0;


    let newCanvasTag = document.createElement("canvas");
    newCanvasTag.setAttribute('style', "position:absolute;" + "top:" + 0 + "px;" + "left:50%;" + "transform: translate(-50%, 0);" + "height:" + documentHeightPixel + "px ;" + "width: 10vw;", 'id', 'time');
    newCanvasTag.height = documentHeightPixel;
    newCanvasTag.width  = window.innerWidth / 10;
    newCanvasTag.id = "time"
    document.getElementById("timeline").append(newCanvasTag);

    canvas = document.getElementById('time')
    var ctx = canvas.getContext('2d');
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    while (nextMonthsPixel < documentHeightPixel) {
        nextMonthsPixel = (todayRaw - todayCalc) / msecToDayFactor
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(canvas.width / 2 - 5, nextMonthsPixel);
        ctx.lineTo(canvas.width / 2 + 5, nextMonthsPixel);
        ctx.stroke();
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(month[todayCalc.getMonth()], canvas.width / 2 + 6 , nextMonthsPixel+5);
        if(todayCalc.getMonth() == 0){
            ctx.fillText(todayCalc.getFullYear(), canvas.width / 2 - 45 , nextMonthsPixel+5);
        }
        todayCalc.setMonth(todayCalc.getMonth()-1);
    }
    }
});
