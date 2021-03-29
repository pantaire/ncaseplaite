function myFunction(x) {
    sidenav = document.getElementById("sidenav");
    if (sidenav.style.display === "block") {
        sidenav.style.display = "none";
    }
    else {
        sidenav.style.display = "block";
    }
    x.classList.toggle("change");
    console.log("toggled");
}