
function showProjects() {
    var x=document.getElementById("projectbutton");
    var y=document.getElementById("projects");

    if (x.innerHTML === "<h3>Hide Projects</h3>") {
        y.style.visibility = "visible"
    } else {
        y.style.visibility = "hidden"
    }
}


function changeText() {
    var a = document.getElementById("projectbutton");
    if (a.innerHTML === "<h3>Show Projects</h3>") {
        a.innerHTML = "<h3>Hide Projects</h3>"
    } else {
        a.innerHTML = "<h3>Show Projects</h3>"
    }
}
