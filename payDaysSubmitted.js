function nextTenPayDates(payDate) {
  let currentDate = dateStringToIntegerArray(payDate)
  let tenWeeks = []

  for (let i = 0; i < 10; i++) {
    currentDate = twoWeeksAhead(startDate)
    tenWeeks.push(currentDate)
  }

  let nextTenIntegerDates = tenWeeks.map(week => { let month = week[0]
    let day = week[1]
    let year = week[2]
    while (holidays.includes(integerArrayToDateString([month, day, year])) {
      if (day === 1) {
        if (month === 1) {
          month = 12 year -= 1
        } else {
          month -= 1
          day = daysInMonth(month)
        }
      } else {
        day -= 1
      }
    }
    return [month, day, year]
  })

  return nextTenIntegerDates.map(date => console.log(integerArrayToDateString(date)))

}

function integerArrayToDateString(integerArray) { let newDay = integerArray[1].toString()
  let newMonth = integerArray[0].toString()
  let newYear = integerArray[2].toString()
  if (newDay.length == 1) {
    newDay = '0' + newDay
  }
  if (newMonth.length == 1) {
    newMonth = '0' + newMonth
  }
  return [newMonth, newDay, newYear].join('/')
}

function dateStringToIntegerArray(dateString) {
  let dateArray = dateString.split('/')
  return dateArray.map(x => parseInt(x))
}

function twoWeeksAhead(integerArray) {
  let month = integerArray[0]
  let day = integerArray[1]
  let year = integerArray[2]
  let newDay = (day + 14) % daysInMonth(month)
  let newMonth = month + Math.floor((day + 14) / daysInMonth(month))
  let newYear = year + (month > 12 ? 1 : 0)
  return [newMonth, newDay, newYear]
}

function daysInMonth(month, leapYear = false) {
  if (month == 2) {
    return leapYear ? 29 : 28
  } else if (month < 8) {
    return month % 2 == 0 ? 30 : 31
  } else {
    return month % 2 == 0 ? 31 : 30
  }
}
holidays = [
  01/02/17,
  01/16/17,
  02/20/17,
  05/29/17,
  07/04/17,
  09/04/17,
  10/09/17,
  11/10/17,
  11/23/17,
  12/25/17,
]
nextTenPayDates("01/05/17")
