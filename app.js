


let readyyes_btn = document.querySelector(".ready-yes-btn")
let ready = document.querySelector(".ready")

let main = document.querySelector(".main")
let questionsArray = ["What does HTML stands for?",
                       "What does CPU stands for?",
                       "What does GNU stands for",
                       "Who created the C programming language?",
                       "What does MIDI stands for in music and computers?"
]
let answers = ["hypertext markup language",
               "central processing language",
               "gnu's not unix",
               "dennis richie",
               "musical instrument digital interface"
]




readyyes_btn.addEventListener("click", ()=>{
    ready.style.display = "none"

    let createQuiz = document.createElement("div")
    createQuiz.classList.add("question-container")
    createQuiz.innerHTML = `
    <div class="question-container>
     
   
     <p id="question" style ="color: white;  font-size: 1.2rem;">
                ${questionsArray[i]}
            </p>
            <input id="user-input" type="text">
            <button id="submit-btn">Submit</button>     
            <p id="verdict">
                correct!!
            </p> 
    
    
    



           

        </div>
    `
    main.appendChild(createQuiz)


    let submitbtn = document.querySelector("#submit-btn")
    let userinput = document.querySelector("#user-input").value;
    let verdict = document.querySelector("#verdict")
    let question = document.querySelector("#question")

   

    submitbtn.addEventListener("click", ()=>{
        if(userinput == '')
        {
            verdict.innerText = "Please type your answer"
            verdict.style.color = "orange"
        }
        else{

    
        }
      
    })

})



