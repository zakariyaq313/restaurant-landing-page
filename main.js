let likeButtons = document.querySelectorAll("button.like-button");

for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", () => {
        likeButtons[i].classList.toggle("favourite");
    })
}