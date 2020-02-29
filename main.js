let tableCellArray = document.querySelectorAll('.table-cell')
let winnerCont = document.querySelector('.winner-text')
let first = "X"
let second = "O"
let count = 0

tableCellArray.forEach(item => {
    item.addEventListener('click',() => {
        const sign = (count % 2 === 0) ? first : second
        item.innerHTML = sign
        count++
        const winner = isWinner(sign)
        if (winner) {
            setWinnerMessage(sign," is winner")
        }
        if (!winner && count === 9) {
            setWinnerMessage("It's draw"," play again")
        }
    })
})

const smartCheck = (sign) =>
    (index1, index2, index3) =>
        hasSigns(index1, index2, index3, sign)

function isWinner(sign) {
    const check = smartCheck(sign)

    if(check(0, 1, 2)) {
        return true
    }
    else if(check(3, 4, 5)) {
        return true
    }
    else if(check(6, 7, 8)) {
        return true
    }
    else if(check(0, 3, 6)) {
        return true
    }
    else if(check(1, 4, 7)) {
        return true
    }
    else if(check(2, 5, 8)) {
        return true
    }
    else if(check(0, 4, 8)) {
        return true
    }
    else if(check(2, 4, 6)) {
        return true
    }
}

function setWinnerMessage(sign,message) {
    winnerCont.innerHTML = sign + message
}

const hasSign = (index, sign) =>
    tableCellArray[index].innerHTML === sign

const hasSigns = (index1, index2, index3, sign) =>
    hasSign(index1, sign) && hasSign(index2, sign) && hasSign(index3, sign)