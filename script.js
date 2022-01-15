const check = document.querySelector(".check");
const again = document.querySelector(".again");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore")

let playing = true
let random;

let point = 10;

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

    if (point > 1 && playing && !input.value == "") {

        if (input.value < 1 || input.value > 50) {
            message.innerHTML = `Please<br>Between1 and 50`
            input.style.backgroundColor = "red"
            document.body.style.backgroundColor = "#222"

        } else {
            point--
            score.innerHTML = point

            if (input.value == random) {
                document.body.style.backgroundColor = "green"
                message.innerHTML = "You are winner!"
                point > highscore.innerHTML ? highscore.innerHTML = point : ""
                input.disabled = true
                check.style = "display:none"
                again.style = "display:block"
                playing = false


            } else if (input.value > random) {
                document.body.style.backgroundColor = "orange"
                message.innerHTML = `${input.value} is high`
                input.value = ""
                input.focus()

            } else if (input.value < random) {
                document.body.style.backgroundColor = "blue"
                message.innerHTML = `${input.value} is low`
                input.value = ""
                input.focus()

            }
        }
    } else if (point == 1) {
        document.body.style.backgroundColor = "red"
        message.innerHTML = "Game Over!!!"
        score.innerHTML = 0
        input.disabled = true
        input.value = ""
        check.style = "display:none"
        again.style = "display:block"
        playing = false
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