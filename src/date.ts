import { months } from './months.js'

let month = months[6]

export const date = () => {

    generateDateDiv()
}



const switchMonth = (monthDiv: any, direction: string) => {
    let currentMonthNum = month.id

    if (direction === 'next') {
        currentMonthNum++
        month = months[currentMonthNum]
        monthDiv.innerHTML = month.nameDE
    } else if (direction === 'prev') {
        currentMonthNum--
        month = months[currentMonthNum]
        monthDiv.innerHTML = month.nameDE
    }

    month = months[currentMonthNum]
    console.log(month)
}

const generateDateDiv = () => {

    // Month
    const monthDiv = document.createElement('div')
    const monthContent = document.createTextNode(month.nameDE)
    monthDiv.append(monthContent)

    // Next Month
    const nextMonthBtn = document.createElement('button')
    const nextMonthBtnContent = document.createTextNode('>')
    nextMonthBtn.append(nextMonthBtnContent)
    nextMonthBtn.addEventListener('click', () => { switchMonth(monthDiv, 'next') })

    // Prev Month
    const prevMonthBtn = document.createElement('button')
    const prevMonthBtnContent = document.createTextNode('<')
    prevMonthBtn.append(prevMonthBtnContent)
    prevMonthBtn.addEventListener('click', () => { switchMonth(monthDiv, 'prev') })

    const dateDiv = document.createElement('div')
    dateDiv.append(prevMonthBtn, monthDiv, nextMonthBtn,)

    const target = document.getElementById('datepicker')
    document.body.insertBefore(dateDiv, target)

}

const generateWeekDiv = () => {

}