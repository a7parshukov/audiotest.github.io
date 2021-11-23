let point = 0;
let ANSWER = ['fail', 'wake up', 'there is', 'so', 'hands', 'change', 'was', 'if', 'starts', 'so', 'hands', 'change', 'that', 'second', 'live', 'hands', 'upside', 'hands', 'change']

function getAnswer() {
    /* 
    Основная функция, которая вызывается по нажатии на кнопку
    */
    //   1. Создаем массив для ответов
    let answerList = [];
    //  2. Создаем переменную, содержащую количество полей с необходимым классом
    let lengthAnswerList = document.getElementsByClassName('stud-answer').length;
    //  3. Заносим содержания полей в массив ответа
    for(let i = 0; i < lengthAnswerList; i++) {
        answerList.push(document.getElementsByClassName('stud-answer')[i].value);
    }
    for(let i = 0; i < answerList.length; i++) {
        if(answerList[i] == ANSWER[i]) {
            point += 1;
            doRightClass(i);
        } else {
            doWrongClass(i);
        }
    }
    alert('Вы набрали ' + point + ' очка(ов) из ' + lengthAnswerList + '. Чтобы посмотреть свой результат нажми "ОК". Ошибки выделены красным');
    document.getElementById('button_see-result').classList.add('invisible');
    document.getElementById('button_reload').classList.remove('invisible');
}

function doRightClass(numberElement) {
    let changeClass = document.getElementsByClassName('stud-answer')[numberElement].classList.add('right');
}

function doWrongClass(numberElement) {
    let changeClass = document.getElementsByClassName('stud-answer')[numberElement].classList.add('wrong');
}