 myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);

    function onClick() {  
        myitem.style.color = "green";  
    }
    thebutton = document.getElementById("thebutton");  
    otheritem = document.getElementById("buttontest");
    thebutton.addEventListener("click", onButtonClick);
    function onButtonClick() {  
        otheritem.style.color = "red";  
    }
    textentry = document.getElementById("myinput");  
    textentry.addEventListener("change", onChange);
    function onChange() {  
        newtext = myinput.value;  
        otheritem.innerHTML = newtext;  
    }
    <strong>Look at this bold text!</strong>
    