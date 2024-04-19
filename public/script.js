const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is the main character in "Naruto"?',
    answers: [
      { text: 'Sasuke Uchiha', correct: false },
      { text: 'Naruto Uzumaki', correct: true },
      { text: 'Sakura Haruno', correct: false },
      { text: 'Kakashi Hatake', correct: false }
    ]
  },
  {
    question: 'In Dragon Ball Z, what is Goku signature attack?',
    answers: [
      { text: 'Rasengan', correct: false },
      { text: 'Kamehameha', correct: true },
      { text: 'Chidori', correct: false },
      { text: 'Spirit Bomb', correct: false }
    ]
  },
  {
    question: 'What is the name of the protagonist in "Attack on Titan"?',
    answers: [
      { text: 'Mikasa Ackerman', correct: false },
      { text: 'Eren Jaeger', correct: true },
      { text: 'Armin Arlert', correct: false },
      { text: 'Levi Ackerman', correct: false }
    ]
  },
  {
    question: 'Which anime features a group of high school students forming a band called "Afterglow"?',
    answers: [
      { text: 'Love Live!', correct: false },
      { text: 'K-On!', correct: false },
      { text: 'BanG Dream!', correct: true },
      { text: 'Hibike! Euphonium', correct: false }
    ]
  },
  {
    question:'In "One Piece," what is the name of the main character straw hat?',
    answers:[
      {text:'Red Straw Hat',correct:false},
      {text:'Legendary Hat',correct:false},
      {text:'Straw Hat Luffy',correct:true},
      {text:'The Pirate King Hat',correct:false},
    ]
  },
  {
    question:'What is the name of the world where "Sword Art Online" takes place?',
    answers:[
      {text:'Aincrad',correct:true},
      {text:'Alfheim',correct:false},
      {text:'Gun Gale Online',correct:false},
      {text:'Underworld',correct:false},
    ]
  },
  {
    question:'Which anime follows the story of two brothers, Edward and Alphonse, in search of the Philosopher Stone?',
    answers:[
      {text:'Fullmetal Alchemist',correct:true},
      {text:'Black Clover',correct:false},
      {text:'Bleach',correct:false},
      {text:'Fairy Tail',correct:false},
    ]
  },
  {
    question:'In "My Hero Academia," what is Izuku Midoriya superhero name?',
    answers:[
      {text:'Dynamight',correct:false},
      {text:'Red Riot',correct:false},
      {text:'Deku',correct:true},
      {text:'Ingenium',correct:false},
    ]
  },
  {
    question:'Who is known as the "Strongest Disciple" in "Kenichi: The Mightiest Disciple"?',
    answers:[
      {text:'Kenichi Shirahama',correct:false},
      {text:'Miu Furinji',correct:false},
      {text:'Shigure Kosaka',correct:false},
      {text:'Hayato Furinji',correct:true},
    ]
  },
  {
    question:'In "Death Note," who is the main antagonist?',
    answers:[
      {text:'Light Yagami',correct:false},
      {text:'Ryuk',correct:false},
      {text:' L Lawliet',correct:true},
      {text:'Near',correct:false},
    ]
  },
  {
    question:'What is the name of the legendary pirate in "One Piece" whose treasure, the One Piece, is sought by many?',
    answers:[
      {text:'Blackbeard',correct:false},
      {text:'Gol D. Roger',correct:true},
      {text:'Monkey D. Luffy',correct:false},
      {text:'Shanks',correct:false},
    ]
  },
  {
    question:'Which anime features a group of students who try to revive their school defunct club?',
    answers:[
      {text:'The Melancholy of Haruhi Suzumiya',correct:false},
      {text:'Clannad',correct:false},
      {text:'Hyouka',correct:true},
      {text:'Angel Beats!',correct:false},
    ]
  },
  {
    question:'In "Demon Slayer: Kimetsu no Yaiba," what is the name of Tanjiro Kamado sister who becomes a demon?',
    answers:[
      {text:'Nezuko Kamado',correct:true},
      {text:'Kanao Tsuyuri',correct:false},
      {text:'Mitsuri Kanroji',correct:false},
      {text:'Shinobu Kocho',correct:false},
    ]
  },
  {
    question:'What is the name of the main character in "Cowboy Bebop"?',
    answers:[
      {text:'Spike Spiegel',correct:true},
      {text:'Jet Black',correct:false},
      {text:'Faye Valentine',correct:false},
      {text:'Edward Wong Hau Pepelu Tivrusky IV',correct:false}
    ]
  },
  {
    question:'Which anime features a world where humans coexist with creatures known as "ghouls" who eat human flesh?',
    answers:[
      {text:'Tokyo Ghoul',correct:true},
      {text:'Parasyte',correct:false},
      {text:'Attack on Titan',correct:false},
      {text:'Claymore',correct:false}
    ]
  },
  {
    question:'In "Hunter x Hunter," what is the name of the protagonist searching for his father?',
    answers:[
      {text:'Kurapika',correct:false},
      {text:'Gon Freecss',correct:true},
      {text:'Leorio',correct:false},
      {text:'Killua Zoldyck',correct:false}
    ]
  },
  {
    question:'Which anime revolves around the sport of volleyball and follows the journey of the Karasuno High School volleyball team?',
    answers:[
      {text:'Ace of Diamond',correct:false},
      {text:'Kurokos Basketball',correct:false},
      {text:'Free!',correct:false},
      {text:'Haikyuu!!',correct:true}
    ]
  },
  {
    question:'What is the name of the giant humanoid robots piloted by characters in "Neon Genesis Evangelion"?',
    answers:[
      {text:'Angels',correct:false},
      {text:'Titans',correct:false},
      {text:'Evas',correct:true},
      {text:'Gundams',correct:false}
    ]
  },
  {
    question:'Which anime features a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans?',
    answers:[
      {text:'Attack on Titan',correct:true},
      {text:'Akame ga Kill!',correct:false},
      {text:'Seraph of the End',correct:false},
      {text:'Highschool of the Dead',correct:false}
    ]
  },
  {
    question:'What is the name of the protagonist in "Mob Psycho 100" who has psychic abilities?',
    answers:[
      {text:'Shigeo Kageyama',correct:false},
      {text:'Reigen Arataka',correct:false},
      {text:'Ritsu Kageyama',correct:true},
      {text:'Teruki Hanazawa',correct:false}
    ]
  },
]