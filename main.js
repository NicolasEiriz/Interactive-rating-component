// // Your users should be able to:

// Select and submit a number rating -> done

// See the "Thank you" card state after submitting a rating

// See hover and focus states for all interactive elements on the page -> done


//Select the numbers button

const numberButtons = document.querySelectorAll('.number')


//When click it pass the value

let NumberValue

numberButtons.forEach(num=>{
  num.addEventListener('click', (e)=>{

    const {target} = e
    const {value}  = target
    NumberValue = value
    target.style = 'color: hsl(0, 0%, 100%); background: hsl(25, 97%, 53%)'
    
  })
})

const submitButton = document.querySelector('#submit-btn')

const main = document.querySelector('#card')

submitButton.addEventListener('click', ()=>{
  document.querySelector('.userChoice').textContent = NumberValue
  main.style.display = 'none'
  document.querySelector('.thanksCard').style = 'display: flex'
})