document.addEventListener("DOMContentLoaded", () => {
    
    let image = document.getElementById('gruss');
    
    image.addEventListener("click", function(){
        window.open("secondPage.html");
    });
});