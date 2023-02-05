import { inputText, resetbtn, selectedOption, submitButton, questions } from "./config.js";
resetbtn.addEventListener('click', () => {
    inputText.value = "";
})
submitButton.addEventListener('click', () => {
    const divQuestion = document.createElement('div')
    const span = document.createElement('span');
    const divContent = document.createElement('div');
    const buttonDelete = document.createElement('button');
    const buttonSwitch = document.createElement('button');

    divQuestion.classList.add('question')
    span.classList.add('idQuestion')
    divContent.classList.add('content')
    buttonDelete.classList.add('delete')
    buttonSwitch.classList.add('switch')

    const questionNumber = document.createTextNode(questions.children.length + 1)
    const textContent = document.createTextNode(inputText.value)
    const textDelete = document.createTextNode('delete')
    const textSwitch = document.createTextNode('switch')

    span.appendChild(questionNumber)
    divContent.appendChild(textContent)
    buttonDelete.appendChild(textDelete)
    buttonSwitch.appendChild(textSwitch)

    divQuestion.classList.add(selectedOption.value)
    divContent.classList.add('content')
    buttonDelete.classList.add('delete')
    buttonSwitch.classList.add('switch')


    divQuestion.appendChild(span);
    divQuestion.appendChild(divContent);
    divQuestion.appendChild(buttonDelete);
    divQuestion.appendChild(buttonSwitch);
    questions.appendChild(divQuestion);

    buttonSwitch.addEventListener('click', () => {
        if (divQuestion.classList.contains('true')) {
            divQuestion.classList.remove('true');
            divQuestion.classList.add('false');
        } else {
            divQuestion.classList.remove('false')
            divQuestion.classList.add('true');
        }
    })
    buttonDelete.addEventListener('click', () => {
        divQuestion.remove();
        numberOfQuestions.innerText = questions.children.length || "";

    })
    numberOfQuestions.innerText = questions.children.length || "";
})
