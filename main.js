// // Your users should be able to:

// Select and submit a number rating
// See the "Thank you" card state after submitting a rating
// See hover and focus states for all interactive elements on the page


//Select the numbers button

const numberButtons = document.querySelectorAll('.number')


//When click it pass the value

let NumberValue

numberButtons.forEach(num=>{
  num.addEventListener('click', (e)=>{
    const {target} = e
    const {value}  = target
    NumberValue = value
    target.setAttribute('style', 'background: hsl(25, 97%, 53%); color: hsl(0, 0%, 100%);') 
  })
})

const submitButton = document.querySelector('#submit-btn')

submitButton.addEventListener('click', ()=>{
  console.log(NumberValue)
  location.reload()
})