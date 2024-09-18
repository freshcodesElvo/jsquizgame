let readyyes_btn = document.querySelector(".ready-yes-btn")
let ready = document.querySelector(".ready")
let score = 0;
let scoreTag = document.querySelector(".score")
let compliments = ["Very nice",
                   "tremendous",
                   "beautiful",
                   "Devine",
                   "You are smart"
]
let randomComplement;

let main = document.querySelector(".main")
let questionsArray = ["What does HTML stands for?",
                       "What does CPU stands for?",
                    //    "What does GNU stands for",
                    //    "Who created the C programming language?",
                    //    "What does MIDI stands for in music and computers?"
]
let answers = ["hypertext markup language",
               "central processing unit",
            //    "gnu's not unix",
            //    "dennis richie",
            //    "musical instrument digital interface"
]
let trials = 3;

readyyes_btn.addEventListener("click", ()=>{
    ready.style.display = "none"
    generateQ();
})
let got_right_questions = []
let got_wrongt_answers = []
let currentIndex = 0
let flashInterval;
let gameoverr = false;

function generateQ(){
    if(gameoverr == true){
        let i;
        let p = '';

        for ( i = 0; i < got_right_questions.length; i += 2) {
            p += `<p style="font-size: 1.1rem; color:antiquewhite; display:flex; justify-content: flex-start; align-items: center; font-weight: 500; " >${got_right_questions[i]} &nbsp &nbsp <span style="font-size: 1.1rem; color: rgb(0, 255, 0);"> ${got_right_questions[i + 1]} &nbsp &nbsp</span> <ion-icon name="checkmark-outline"></ion-icon></p>`;
        }
        let j;
        let q = '';

        for ( j = 0; j < got_wrongt_answers.length; j += 2) {
            q += `<p style="font-size: 1.1rem; color:antiquewhite; display:flex; justify-content: flex-start; align-items: center; font-weight: 500; " >${got_wrongt_answers[j]} &nbsp &nbsp <span style="font-size: 1.1rem; color: red;"> ${got_wrongt_answers[j + 1]} &nbsp &nbsp</span> <ion-icon style ="color: red" name="close-outline"></ion-icon></p>`;
        }

        
        
        let game_over = document.createElement("div")
                        game_over.classList.add("game-over-body")
                        game_over.innerHTML= `
                           <div>
                                <h2>
                                    Your performance
                                </h2>

                                    <div class="performance-questions">
                                    <h2>Gotten right</h2>
                                         ${p}
                                    <h2> Failed </h2>
                                         ${q}
                                         <p>90%</p>
                                    </div>
                                    
                                </div>
                        `
                        let performance_questions = document.getElementById("#performance-questionsz")
                        document.querySelector(".question-container").style.display = "none";
                        document.querySelector(".query").appendChild(game_over)
        return;
    }

        let createQuiz = document.createElement("div") 
        createQuiz.classList.add("question-container")
        createQuiz.innerHTML = `
        <div class="question-container">
         <p id="question" style ="color: white;  font-size: 1.2rem;">
              
                ${currentIndex + 1}. ${questionsArray[currentIndex]}
                </p>
                <input id="user-input" type="text">
                <button id="submit-btn">Submit</button>     
                <p id="verdict">

                </p> 
                <p id="remaining-trials">
                    
                </p> 
            </div>
        `
        document.querySelector(".query").innerHTML = ''; 
        document.querySelector(".query").appendChild(createQuiz)
        
        let submitbtn = document.querySelector("#submit-btn")
        let verdict = document.querySelector("#verdict")
        let question = document.querySelector("#question")
        let remaining_trials = document.querySelector("#remaining-trials")
    
        submitbtn.addEventListener("click", ()=>{
        
            let userinput = document.querySelector("#user-input").value
            if(userinput != '')
            {

             
                let change_to_lower = userinput.toLowerCase();
                //console.log(change_to_lower)
                randomComplement = Math.floor(Math.random()*compliments.length)
        
                if(change_to_lower === answers[currentIndex])
                {    
                    verdict.innerText = `${compliments[randomComplement]} !!! 😎😎😎`
                    //console.log(randomComplement)
                    verdict.style.color = "green"
                    verdict.style.fontSize = "1.8rem"
                    verdict.style.fontWeight = "bold"
                    currentIndex++;
                    score++;
                    scoreTag.innerText = `Score: ${score}`;

                    //////correct question

                    got_right_questions.push(questionsArray[currentIndex-1])
                    //console.log(got_right_questions)
                    got_right_questions.push(userinput)
                    //console.log(got_right_answers)

                    flashColor_green()
                    setTimeout(generateQ, 2000)

                    if(currentIndex == questionsArray.length){
                        
                        gameoverr = true
                    }
   
                }else{
                    userinput.value = ' '
                    verdict.innerText = "incorrect 😣😣😣 try again"
                    verdict.style.color = "red"
                    verdict.style.fontSize = "1.8rem"
                    verdict.style.fontWeight = "bold" 
                    flashColor_red()
                    trials--;
                    remaining_trials.innerText = `${trials} tirals remaining`
                    remaining_trials.style.color = 'white'
                
                    if(trials === 0)
                    {
                        verdict.innerText = "No more trials left.";
                        verdict.style.color = "grey";
                        verdict.style.fontSize = "1.8rem"
                        verdict.style.fontWeight = "bold"     
                        submitbtn.disabled = true

                        got_wrongt_answers.push(questionsArray[currentIndex])
                        got_wrongt_answers.push(userinput)

                        setTimeout(()=>{
                            currentIndex++
                            trials =3
                            generateQ();
                        },3000)
                    }
                }
            }
            else{
                  verdict.innerText = "Please type your answer"
                   verdict.style.color = "orange"
        
            }
    })
}
let isGreen = false
let flashCount = 0;
const maxFlashes = 10

function flashColor_green()
{
        document.body.style.backgroundColor = 'green'
        setTimeout(() =>{
            document.body.style.backgroundColor = '#2d2d2d';
        }, 500);
}
function flashColor_red(){
    document.body.style.backgroundColor = 'rgb(255, 44, 44)'

    setTimeout(()=>{
        document.body.style.backgroundColor = '#2d2d2d'
    }, 500)

}