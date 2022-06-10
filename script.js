const bill = document.getElementById('bill')
const tipBtns = document.getElementsByClassName('tip-btn')
const customBtn = document.querySelector('.custom')
const numberOfPeople = document.getElementById('people')
const errorMsg = document.getElementById('error-msg')
const totalPerPerson = document.querySelector('.total-amount')
const tipPerPerson = document.querySelector('.tip-total')
const resetBtn = document.getElementById('reset')

let tipPercent = 0

for (let btn of tipBtns) {
    btn.addEventListener('click', function () {
        tipPercent = Number.parseInt(btn.value)
    })
}

numberOfPeople.addEventListener('input', function () {
    if (+numberOfPeople.value === 0) {
        errorMsg.style.visibility = 'visible'
        totalPerPerson.textContent = '$0.00'
        tipPerPerson.textContent = '$0.00'

        resetBtn.setAttribute('disabled', true)
        resetBtn.style.background = 'hsl(183, 64%, 25%)'
    }
    else {
        errorMsg.style.visiblity = 'hidden'
        if (+customBtn.value !== "") {
            tipPercent = +customBtn.value
        }

        const billAmount = +bill.value
        const peopleCount = +numberOfPeople.value

        const tip = (billAmount * tipPercent) / 100
        const total = billAmount + tip

        tipPerPerson.textContent = `$${(tip / peopleCount).toFixed(2)}`

        totalPerPerson.textContent = `$${(total / peopleCount).toFixed(2)}`

        resetBtn.removeAttribute('disabled')
        resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)'
    }
})
resetBtn.addEventListener('click', function () {
    bill.value = numberOfPeople.value = customBtn.value = ''
    tipPerPerson.textContent = totalPerPerson.textContent = '$0.00'
    tipPercent = 0
    resetBtn.setAttribute('disabled', true)
    resetBtn.style.background = 'hsl(183, 64%, 25%)'
})