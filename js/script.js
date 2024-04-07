var reg = document.getElementById("reg");
var regest = document.getElementById("regest");
var closeReg = document.getElementById("close-reg");

reg.onclick = function() {
    regest.style.right = 0;
    closeReg.onclick = function () {
        regest.style.right = "-100%";
    }
}


