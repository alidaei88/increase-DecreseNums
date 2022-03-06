window.addEventListener("load", () => {

const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const count = document.querySelector(".count")

increaseBtn.addEventListener("click", () => {

    count.innerHTML = parseInt(count.innerHTML) + 1
    changeColor ()

})


decreaseBtn.addEventListener("click", () => {

   count.innerHTML = parseInt(count.innerHTML) - 1
   changeColor ()

})

function changeColor () {

    if (count.innerHTML >= 5) {
        document.body.style.backgroundColor = "green"
    } else if (count.innerHTML <= -5) {

        document.body.style.backgroundColor = "blue"

    } else if (count.innerHTML == 0) {
        document.body.style.backgroundColor = "white"
    }
    else {
        document.body.style.backgroundColor = "red"
    }

    }

})



