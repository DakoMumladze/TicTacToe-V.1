let tableCellArray = document.querySelectorAll('.table-cell')
let winnerCont = document.querySelector('.winner-text')
let first = "X"
let second = "O"
let count = 0

tableCellArray.forEach(item => {
    item.addEventListener('click',() => {
        console.log(item, count, 444)
        const sign = (count % 2 === 0) ? first : second
        item.innerHTML = sign
        count++
        checkWinner(sign)
    })
})
function checkWinner(sign) {
    if(tableCellArray[0].innerHTML === sign && tableCellArray[1].innerHTML === sign && tableCellArray[2].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[3].innerHTML === sign && tableCellArray[4].innerHTML === sign && tableCellArray[5].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[6].innerHTML === sign && tableCellArray[7].innerHTML === sign && tableCellArray[8].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[0].innerHTML === sign && tableCellArray[3].innerHTML === sign && tableCellArray[6].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[1].innerHTML === sign && tableCellArray[4].innerHTML === sign && tableCellArray[7].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[2].innerHTML === sign && tableCellArray[5].innerHTML === sign && tableCellArray[8].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[0].innerHTML === sign && tableCellArray[4].innerHTML === sign && tableCellArray[8].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
    else if(tableCellArray[2].innerHTML === sign && tableCellArray[4].innerHTML === sign && tableCellArray[6].innerHTML === sign) {
        return winnerCont.innerHTML = `${sign} is winner`
    }
}