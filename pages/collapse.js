// trick to make first item expanded at loading time
window.onload = function() {
    var coll = document.getElementsByClassName("collapsible");
    coll[0].click();
};

// collapsible list handler
function init() {
    var coll = document.getElementsByClassName("collapsible");

    // expand/collapse by click event
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }, false);
    }
}

init();