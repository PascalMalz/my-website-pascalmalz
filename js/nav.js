



function showContact(){

    if (document.getElementsByClassName("nav_dropdown")[0].style.display == "" || document.getElementsByClassName("nav_dropdown")[0].style.display == "none"){
        document.getElementsByClassName("nav_dropdown")[0].style.display = "flex"
    }else{
        document.getElementsByClassName("nav_dropdown")[0].style.display = "none"
    }
}

function singleShowContact(){
    document.getElementsByClassName("nav_dropdown")[0].style.display = "flex";
}

function hideContact(){
    document.getElementsByClassName("nav_dropdown")[0].style.display = "none";
}

//document.getElementById("contactTag").addEventListener("mouseenter", singleShowContact);
document.getElementById("contact_dropdown_tag").addEventListener("mouseleave", hideContact);

//document.getElementById("webage_overview").addEventListener("mouseenter", hideContact);
