import { getDatas } from "./apiDatas.js";

let teste = await getDatas();
let question = 0;
let totalOfValues = 0;
//opções: title, id, options(array com as respostas[value, id, question_id,answer])

(async function startForm(){
    document.querySelector("#title").innerText = "GTI QUIZ"

    let texto = document.createElement("p")
    texto.innerText = `Bem-vindo(a) ao quiz da GTI`

    let button = document.createElement("button")
    button.innerText = "Clique aqui para iniciar"
    button.classList.add("start-end-button")
    button.addEventListener("click", function(){
        texto.remove()
        button.remove()
        createFormElements(question);
    })

    document.querySelector(".container").appendChild(texto)
    document.querySelector(".container").appendChild(button)

})()

function checkHighestValue(highArray) {
    let highestValue = 0;
    highArray.forEach((e) => {
      let localValue = 0;
      e.options.forEach((options, i) => {
        if (options.value > localValue) {
          localValue = options.value;
        }
      });
      highestValue += localValue;
    });
    return highestValue;
  }

async function createFormElements(index) {
  let form = document.querySelector("#form");
  document.getElementById("title").innerText = teste[0].title;

  teste[index].options.forEach((e, i) => {

    let div = document.createElement("div");
    div.classList.add("item");

    let optionCheckbox = document.createElement("input");
    optionCheckbox.type = "radio";
    optionCheckbox.name = "resposta";
    optionCheckbox.value = teste[index].options[i].value;

    let optionLabel = document.createElement("label");

    let optionAnswer = document.createElement("p");
    optionAnswer.classList.add("p")
    optionAnswer.innerText = teste[index].options[i].answer;

    optionLabel.appendChild(optionCheckbox);
    optionLabel.appendChild(optionAnswer);

    form.appendChild(div);
    div.appendChild(optionLabel);
  });

  let button = document.createElement("button");
  button.innerText = "Enviar";
  button.type = "submit"
  button.disabled =true
  button.id = "send-data";
  form.appendChild(button);

document.getElementsByName("resposta").forEach(e=>{
    e.addEventListener("change", function(){
        button.disabled=false
    })
})

  let formButton = document.getElementById("send-data")
    formButton.addEventListener('click', e =>{
    
    e.preventDefault()

    let selectedValue = document.querySelector('[name=resposta]:checked').value;
    question++;
    getValueAndSkipQuestion(question, selectedValue)
})
}

function updateFormElements(question){
    document.getElementById("title").innerText = teste[question].title;
    document.querySelectorAll(".p").forEach((e,i)=>{
        e.innerText = teste[question].options[i].answer;
    })
    document.querySelectorAll('[name=resposta]').forEach((e,i)=>{
        e.value = teste[question].options[i].value
    })
}

async function getValueAndSkipQuestion(question, selectedValue){
    
    totalOfValues += parseInt(selectedValue);

    if(question < teste.length){
        updateFormElements(question)
    }else{
        finishForm(totalOfValues)
    }
}

function finishForm(totalOfValuesForm){
    document.querySelector("#form").remove()
    document.querySelector("#title").innerText = "Resultados"
    
    let maxValue = checkHighestValue(teste)
    let percentBasedOnValue = (totalOfValuesForm/maxValue*100).toFixed(2)

    let pontuacao = document.createElement("p")
    pontuacao.innerText = `Sua pontuação foi de: ${percentBasedOnValue}%`

    let button = document.createElement("button")
    button.innerText = "Reiniciar o quiz"
    button.classList.add("start-end-button")
    button.addEventListener("click", function(){
        question =0;
        totalOfValues=0;
        button.remove()
        pontuacao.remove()

        let form = document.createElement("form")
        form.id="form"
        document.querySelector(".container").appendChild(form)

        createFormElements(question)
    })

    document.querySelector(".container").appendChild(pontuacao)
    document.querySelector(".container").appendChild(button)
}

