const check = document.querySelector(".check");
const again = document.querySelector(".again");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore")

const result = document.querySelector(".number")

let playing = true
let random;

let point = 10;
// console.log(point)

again.style = "display:none"; //Again tuşunu gizleme
input.focus(); //Sayfa açıldığında input girişini seçme


//-----------------------------------------


function secretNumber() {
    random = Math.ceil(Math.random() * 50)
    return random
}

secretNumber()
// console.log(random)


//-----------------------------------------


check.onclick = () => {
    input.style.backgroundColor = ""

    if (input.value < 1 || input.value > 50) {
        message.innerHTML = `Please<br>Between1 and 50`
        input.style.backgroundColor = "red"
        document.body.style.backgroundColor = "#222"

    } else {

        if (point == 1 && playing) {

            if (input.value == random) {
                document.body.style.backgroundColor = "green"
                message.innerHTML = "You are winner!"
                result.innerHTML = random
                point > highscore.innerHTML ? highscore.innerHTML = point : "";
                score.innerHTML = point
                input.disabled = true
                check.style = "display:none"
                again.style = "display:block"

            } else if (!(input.value == random)) {
                point--
                score.innerHTML = point
                document.body.style.backgroundColor = "red"
                message.innerHTML = "Game Over!!!"
                result.innerHTML = random
                score.innerHTML = 0
                input.disabled = true
                check.style = "display:none"
                again.style = "display:block"
                playing = false

            }

        } else if (point > 1 && playing) {

            if (input.value == random) {
                document.body.style.backgroundColor = "green"
                message.innerHTML = "You are winner!"
                result.innerHTML = random
                point > highscore.innerHTML ? highscore.innerHTML = point : "";
                score.innerHTML = point
                input.disabled = true
                check.style = "display:none"
                again.style = "display:block"
                playing = false

            } else if (input.value > random) {
                point--
                score.innerHTML = point
                document.body.style.backgroundColor = "orange"
                message.innerHTML = `${input.value} is high`
                input.value = ""
                input.focus()

            } else if (input.value < random) {
                point--
                score.innerHTML = point
                document.body.style.backgroundColor = "blue"
                message.innerHTML = `${input.value} is low`
                input.value = ""
                input.focus()

            }
        }
    }
    input.focus()
}


//-----------------------------------------


//Değrleri başlanıç değerlerine döndürme
again.onclick = () => {
    secretNumber();
    // console.log(random)

    point = 10;
    playing = true;

    document.body.style.backgroundColor = "#222"

    again.style = "display:none"
    check.style = "display:block"

    result.innerHTML = "?"
    message.innerHTML = "Start guessing..."
    score.innerHTML = "10"

    input.style.backgroundColor = ""
    input.disabled = false
    input.value = ""
    input.focus()
}


//-----------------------------------------


//Enter tuşu ile butonu çalıştırma
input.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        check.click();
    }
})