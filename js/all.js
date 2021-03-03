const prizeListDisplay = document.querySelector('.js-circleLottery')
const circleLottery__btn = document.querySelector('.js-circleLottery__btn')
const handDisplay = document.querySelector('.js-hand')

const lottery = function () {
  let vm = this
  let prizeListStr = ''
  let nowDeg = 0
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
  this.start = () => {
    let newDeg = 30
    prizeListDisplay.style.transform = `rotate(${ nowDeg + newDeg }deg)`
    nowDeg += newDeg
  }
  vm.prize()
}
const newLottery = new lottery()
circleLottery__btn.addEventListener('click', newLottery.start) 