import {getDatas} from './apiDatas.js';

let teste = await getDatas()
//opções: title, id, options(array com as respostas[value, id, question_id,answer])

function createElement(index){
    let form = document.querySelector("#form");
    document.getElementById('title').innerText = teste[0].title
    let div = document.createElement('div')
    div.classList.add('item')

    let optionCheckbox = document.createElement("input")
    optionCheckbox.type = "radio"
    optionCheckbox.name = "resposta"
    optionCheckbox.value = teste[0].options[0].value

    let optionLabel = document.createElement("label")

    let optionAnswer = document.createElement("p")
    optionAnswer.innerText = teste[0].options[0].answer

    optionLabel.appendChild(optionCheckbox)
    optionLabel.appendChild(optionAnswer)

    form.appendChild(div)
    div.appendChild(optionLabel)
}

function createButton(){
    let form = document.querySelector("#form");
    let button = document.createElement("button")
    button.type = "submit"
    button.innerText = "Enviar"
    form.appendChild(button)
}

createElement()
createButton()