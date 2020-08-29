import { months } from './months.js'

let month = months[6]

export const date = () => {

    generateDateDiv()
}



const switchMonth = (monthDiv: any, weekDiv: any, direction: string) => {
    let currentMonthNum = month.id
    weekDiv.innerHTML = ''
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
    weekDiv.append(generateWeekDiv())
    console.log(month)
}

const generateDateDiv = () => {

    const weekDiv = generateWeekDiv()

    // Month
    const monthDiv = document.createElement('div')
    const monthContent = document.createTextNode(month.nameDE)
    monthDiv.append(monthContent)

    // Next Month
    const nextMonthBtn = document.createElement('button')
    const nextMonthBtnContent = document.createTextNode('>')
    nextMonthBtn.append(nextMonthBtnContent)
    nextMonthBtn.addEventListener('click', () => { switchMonth(monthDiv, weekDiv, 'next') })

    // Prev Month
    const prevMonthBtn = document.createElement('button')
    const prevMonthBtnContent = document.createTextNode('<')
    prevMonthBtn.append(prevMonthBtnContent)
    prevMonthBtn.addEventListener('click', () => { switchMonth(monthDiv, weekDiv, 'prev') })



    const dateDiv = document.createElement('div')
    dateDiv.append(prevMonthBtn, monthDiv, nextMonthBtn, weekDiv)

    const target = document.getElementById('datepicker')
    document.body.insertBefore(dateDiv, target)

}

const generateWeekDiv = () => {
    const weekDiv = document.createElement('div')

    for (let day = 1; day <= month.days; day++) {
        // Day
        const dayDiv = document.createElement('div')
        const dayContent = document.createTextNode(day.toString())
        dayDiv.append(dayContent)
        weekDiv.append(dayDiv)
    }

    return weekDiv

}