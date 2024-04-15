var reg = document.getElementById("reg");
var regest = document.getElementById("regest");
var closeReg = document.getElementById("close-reg");
var disap = document.getElementById("disappear")


reg.onclick = function() {
    regest.style.right = 0;
    disap.style.display = "block";
    disap.style.width = "100%";
    closeReg.onclick = function () {
        regest.style.right = "-100%";
        disap.style.display = "none";
        disap.style.width = "0";
    }
}


var pasd = document.getElementById("pasd");
var shown = document.getElementById("show");
var hide = document.getElementById("hide");

    shown.onclick =function show() {
        if (pasd.value != "") {

            if (pasd.getAttribute("type", "password")) {
                
                pasd.setAttribute("type", "text");
                shown.style.display = "none"
                hide.style.display = "block"
            }
        }
      
        
    }
    hide.onclick = function hiden() {
    
        if (pasd.getAttribute("type", "text")) {
    
            pasd.setAttribute("type", "password");
            shown.style.display = "block"
            hide.style.display = "none"
        }
    
        
    }


