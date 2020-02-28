let tableCellArray = document.querySelectorAll('.table-cell')

console.log(tableCellArray)
let first = "X"
let second = "O"
let count = 0

tableCellArray.forEach(item => {
    item.addEventListener('click',() => {
        console.log(item, count, 444)
        const sign = (count % 2 === 0) ? first : second
        item.innerHTML = sign
        checkWinner()
        count++
    })
})
function checkWinner() {
    tableCellArray[0].innerHTML === 'X' || tableCellArray[1].innerHTML === 'X' || tableCellArray[2].innerHTML === 'X'
}