var modalBtn = document.querySelector(".modal-btn");
var modalContainers = document.querySelector(".containers");
var modalcontent = document.querySelector(".contain");
var closeBtn = modalContainers.querySelector(".close-btn");

// Add content fuction
function addContent(){
    modalContainers.classList.add("modal-vasible")
}
// hide content fuction
function hideContent(){
    modalContainers.classList.remove("modal-vasible")
}



modalBtn.addEventListener("click", () => {
    addContent();
});

modalContainers.addEventListener("click", () => {
    hideContent();
});
modalcontent.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Kay press hide content

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 27 && modalContainers.classList.contains("modal-vasible")) {
        hideContent();

    }
});

closeBtn.addEventListener("click", () => {
    hideContent();
})