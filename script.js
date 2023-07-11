
const Quiz=[
    {
    Question:" Q1: javascript which types of language",
    a:"Fronted",
   b:"Styling",
    c:"Scripting",
    d:"Structural",
    Ans:"Ans3"
    }, 

    
    {
    Question:"Q2: Which is the following methods can be used \n to display data in some form using javaScript",
    a:"Document.write()",
    b:"console.log()",
    c:"window.alert()",
    d:"All of the Above",
    Ans:"Ans2"
    }, 

    {
    Question:"Q3: How can a datatype be declared\n to be a constant type",
    a:"const",
   b:"var",
    c:"let",
    d:"constant",
    Ans:"Ans1"
    }, 

    {
    Question:"Q4: What does CSS stand for",
    a:"Colorful Style Sheets",
   b:"Cascading Style Sheets",
    c:"Computer Style Sheets",
    d:"Creative Style Sheets",
    Ans:"Ans2",
    }, 


    {
    Question:"Q5: Which HTML tag is used to define an\n internal style sheet ?",
    a:"<script>",
   b:"<style>",
    c:"<css>",
    d:"none of them",
    Ans:"Ans2",
    }, 
{
    Question:"Q6: Which is the corrct CSS syntax?",
    a:"{body;color:black}",
   b:"{body:color=black}",
    c:"body{color:black}",
    d:"{body:color=black;}",
    Ans:"Ans3",
    }, 

    {
    Question:"Q7: How do you insert a comment in a CSS file ?",
    a:"//this is a comment",
   b:"'this is a comment'",
    c:"//this is a comment//",
    d:"/*this is a comment*/",
    Ans:"Ans4",
    }, 


    {
    Question:"Which property is used to change the background color?",
    a:"background-color",
   b:"color",
    c:"bgcolor",
    d:"back-ground-color",
    Ans:"Ans1",
    }, 


    {
    Question:"Q9: Which property is used to change the text\n color of an element?",
    a:"fgcolor",
   b:"color",
    c:"text-color",
    d:"font-color",
    Ans:"Ans2",
    }, 


    {
    Question:"Q10: Which CSS property controls the text-size?",
    a:"font-style",
   b:"text-style",
    c:"font-size",
    d:"text-size",
    Ans:"Ans3",
    }, 


    
  

];

const Question=document.querySelector('.Question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const option5=document.querySelector('#option5');
const option6=document.querySelector('#option6');
const option7=document.querySelector('#option7');
const option8=document.querySelector('#option8');
const option9=document.querySelector('#option9');
const option10=document.querySelector('#option10');
const submit=document.querySelector('#button');
const answers=document.querySelectorAll('.Answer')
const showScore=document.querySelector('#showScore');
let QuestionCount=0;
let score=0;

const loadQuestion=()=>{
    const QuestionList=Quiz[QuestionCount];
    Question.innerText = QuestionList.Question;
    option1.innerText = QuestionList.a;
    option2.innerText = QuestionList.b;
    option3.innerText = QuestionList.c;
    option4.innerText = QuestionList.d;
   
    
}

loadQuestion();
getCheckedAnswer=()=>{
    let answer;
   answers.forEach((currentAns)=>{
if(currentAns.checked){
    answer=currentAns.id;
}

    });
    return answer;
};

const  deSelectAll=()=>{
answers.forEach((currentAns)=> currentAns.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckedAnswer();
    if(checkedAnswer==Quiz[QuestionCount].Ans){
        score++;
       
        
    };
    QuestionCount++;
    deSelectAll();
    if(QuestionCount<Quiz.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML= `
        <h2> you score: ${score}/${Quiz.length}</h2>
        <button class="btn" onclick="location.reload()">Take Again</button>
        `;
        showScore.classList.remove("scoreArea");
        
    }
});
