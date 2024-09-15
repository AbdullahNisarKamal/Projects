const questions = [
    {
        'que': 'which of thie following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP', 
        'correct': 'a'

    },
    {
        'que': 'What year was javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1996',
        'd': 'none of above', 
        'correct': 'b'

    },
    {
        'que': 'What dose CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Cascading Style System', 
        'correct': 'b'

    },
]
let index = 0;
let total = questions.length;
let right = 0,
wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.Options')
const loadQuestion  = () => {
   if(index === total){
      return endQuiz()
   }
   
    reset();
 const data = questions[index]
 quesBox.innerText = `${index+1}) ${data.que}`;
 optionInputs[0].nextElementSibling.innerText= data.a;
 optionInputs[1].nextElementSibling.innerText= data.b;
 optionInputs[2].nextElementSibling.innerText= data.c;
 optionInputs[3].nextElementSibling.innerText= data.d;

}

const submitQuiz =() =>{
    const data = questions [index];
    const ans = getAnswer()
    if(ans === data.correct){
          right++;
    } else{
       wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer =()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
                
            }

        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
          input.checked = false;  
        }
    )
}

const endQuiz =() =>{
    document.getElementById("box") .innerHTML =`<h3> Thank you for doing the quiz...... </h3>
    <h2> ${right} out of ${total} are correct </h2>`
}

loadQuestion();