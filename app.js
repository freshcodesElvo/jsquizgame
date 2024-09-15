let readyyes_btn = document.querySelector(".ready-yes-btn")
let ready = document.querySelector(".ready")
let score = 0;
let scoreTag = document.querySelector(".score")

let main = document.querySelector(".main")
let questionsArray = ["What does HTML stands for?",
                       //"What does CPU stands for?",
                       //"//What does GNU stands for",
                       //"Who created the C programming language?",
                       //"What does MIDI stands for in music and computers?"
]
let answers = ["hypertext markup language",
               //"central processing unit",
               //"gnu's not unix",
               //"dennis richie",
               //"musical instrument digital interface"
]
let trials = 3;

readyyes_btn.addEventListener("click", ()=>{
    ready.style.display = "none"
    generateQ();
})

let currentIndex = 0

let gameoverr = false;

function generateQ(){

        let createQuiz = document.createElement("div")
        createQuiz.classList.add("question-container")
        createQuiz.innerHTML = `
        <div class="question-container">
         <p id="question" style ="color: white;  font-size: 1.2rem;">
                    ${questionsArray[currentIndex]}
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
        
                if(change_to_lower === answers[currentIndex])
                {    
                    verdict.innerText = "correct 😎😎😎"
                    verdict.style.color = "green"
                    verdict.style.fontSize = "1.8rem"
                    verdict.style.fontWeight = "bold"
                    currentIndex++;
                    score++;
                    scoreTag.innerText = `Score: ${score}`;
                    setTimeout(generateQ, 2000)

                    if(currentIndex == questionsArray.length){
                        let game_over = document.createElement("div")
                        game_over.classList.add("game-over-body")
                        game_over.innerHTML= `
                           <div >
                           <p style ="color: white;  font-size: 1.2rem;">
                               Game over
                           </p>
                         </div>
                        `
                        document.querySelector(".question-container").style.display = "none";
                        document.querySelector(".main").appendChild(game_over)
                        gameoverr = true
                        if(gameoverr)
                        {
                            
                        }
                        
                    }
                    
                    
                }else{
                    verdict.innerText = "incorrect 😣😣😣 try again"
                    verdict.style.color = "red"
                    verdict.style.fontSize = "1.8rem"
                    verdict.style.fontWeight = "bold" 
                    trials--;
                    remaining_trials.innerText = `${trials} tirals remaining`
                    console.log(trials)
                    if(trials === 0)
                    {
                        verdict.innerText = "No more trials left.";
                        verdict.style.color = "grey";
                        verdict.style.fontSize = "1.8rem"
                        verdict.style.fontWeight = "bold"     
                        submitbtn.disabled = true

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