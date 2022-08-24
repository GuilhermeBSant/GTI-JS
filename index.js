import {getDatas} from './apiDatas.js';

let teste = await getDatas()
//opções: title, id, options(array com as respostas[value, id, question_id,answer])


function createOptions(index){
    let form = document.querySelector("#form");
    document.getElementById('title').innerText = teste[0].title

    teste[index].options.forEach( (e, i) =>{
        console.log(e)

    let div = document.createElement('div')
    div.classList.add('item')

    let optionCheckbox = document.createElement("input")
    optionCheckbox.type = "radio"
    optionCheckbox.name = "resposta"
    optionCheckbox.value = teste[index].options[i].value

    let optionLabel = document.createElement("label")

    let optionAnswer = document.createElement("p")
    optionAnswer.innerText = teste[0].options[i].answer

    optionLabel.appendChild(optionCheckbox)
    optionLabel.appendChild(optionAnswer)

    form.appendChild(div)
    div.appendChild(optionLabel)
    })
}

function createButton(){
    let form = document.querySelector("#form");
    let button = document.createElement("button")
    button.innerText = "Enviar"
    form.appendChild(button)
}

createOptions(0)
createButton()