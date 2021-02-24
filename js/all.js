let prizeListDisplay = document.querySelector('.circleLottery')

const lottery = function () {
  let vm = this
  let prizeListStr = ''
  let setNumber = 20
  this.prize = () => {
    let str = ''
    for (let x = 1; x <= setNumber ; x++) {
      str += `
      <li class="circleLottery__prizeBlcok pt-4 ps-4"> 
        <p class="circleLottery__prizeContent mb-0 ps-2">${x}</p> 
      </li>`
    }
    prizeListStr = str
    prizeListDisplay.innerHTML = prizeListStr
  }
}
const newLottery = new lottery()
newLottery.prize()