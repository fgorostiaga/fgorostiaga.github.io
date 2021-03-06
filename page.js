/* For accordion:
-=-=-=-=-=-=-=-=-=-= */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", clickAcc);
}

function clickAcc(_this) {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

function checkHash() {
    loc = document.getElementById(window.location.hash.substr(1)+"Button")
    if (loc !== null) {
        clickAcc.call(loc)
    }
}

/* For tabs:
   -=-=-=-=-=-=-=-=-=-= */
function showTab(evt, tabId) {
    // Declare all variables
    var i, tabcontent, tablinks;
    _this = document.getElementById(tabId);
    parentdiv = _this.parentElement;

    // Get all elements with class="tabcontent" and hide them
    tabcontents = parentdiv.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = parentdiv.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    _this.style.display = "block";
    evt.currentTarget.className += " active";
}
