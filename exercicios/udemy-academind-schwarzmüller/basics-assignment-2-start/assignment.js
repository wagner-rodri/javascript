const task3Element = document.getElementById('task-3');

function noParameter () {
    alert('Hi, there!')
}

function nameParameter (name) {
    alert(`Hello, ${name}!`)
}

noParameter()
nameParameter('Wagner')

task3Element.addEventListener('click',noParameter)

function task_4 (txt1, txt2, txt3) {
    alert(`${txt1}! ${txt2} ${txt3}!`)
}

task_4('Hello', 'It', 'works')