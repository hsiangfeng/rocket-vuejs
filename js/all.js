const app = new Vue({
  el: '#app',
  data: {
    rocket1: 0,
    rocket2: 0,
    rocket3: 0,
    launchTime: 6000,
    againTime: 6000,
    initialTime: 6000,
    rocketDistance_1: '一號火箭等候發射中...',
    rocketDistance_2: '二號火箭等候發射中...',
    rocketDistance_3: '三號火箭等候發射中...'
  },
  methods: {
    allRocket: function () {
      let el = document.querySelectorAll('.rocket')
      el.forEach(item => {
        item.style.bottom = '2000px'
      })
      this.rocketDistance_1 = '一號火箭已升空至2000px'
      this.rocketDistance_2 = '二號火箭已升空至2000px'
      this.rocketDistance_3 = '三號火箭已升空至2000px'
    },
    reRocket: function () {
      let el = document.querySelectorAll('.rocket')
      el.forEach(item => {
        item.style.bottom = '101px'
      })
      this.rocketDistance_1 = '一號火箭等候發射中...'
      this.rocketDistance_2 = '二號火箭等候發射中...'
      this.rocketDistance_3 = '三號火箭等候發射中...'
      document.querySelector('.countdown').textContent = ''
    },
    rocketSetTimeOut: function () {
      this.launchTime -= 1000
      document.querySelector('.countdown').textContent = '發射倒數' + (this.launchTime / 1000) + '秒'
      if (this.launchTime === 0) {
        console.log('1234')
        this.allRocket()
        this.reRocketSetTimeout()
        return
      }
      setTimeout(this.rocketSetTimeOut, 1000)
    },
    reRocketSetTimeout: function () {
      this.againTime -= 1000
      document.querySelector('.countdown').textContent = '回歸倒數' + (this.againTime / 1000) + '秒'
      if (this.againTime === 0) {
        this.launchTime = this.initialTime
        this.againTime = this.initialTime
        this.reRocket()
        this.rocketSetTimeOut()
        return
      }
      setTimeout(this.reRocketSetTimeout, 1000)
    },
    randomRocket: function () {
      let el = document.querySelectorAll('.rocket')
      el.forEach(item => {
        item.style.bottom = this.getRandom() + 'px'
      })
      this.rocketDistance_1 = `一號火箭已升空至${el[0].style.bottom}`
      this.rocketDistance_2 = `二號火箭已升空至${el[1].style.bottom}`
      this.rocketDistance_3 = `三號火箭已升空至${el[2].style.bottom}`
      setTimeout(this.reRocket, 4000)
    },
    autoRandomRocket: function () {
      let el = document.querySelectorAll('.rocket')
      el.forEach(item => {
        item.style.bottom = this.getRandom() + 'px'
      })
      this.rocketDistance_1 = `一號火箭已升空至${el[0].style.bottom}`
      this.rocketDistance_2 = `二號火箭已升空至${el[1].style.bottom}`
      this.rocketDistance_3 = `三號火箭已升空至${el[2].style.bottom}`
      setTimeout(this.reRocket, 2000)
      setTimeout(this.autoRandomRocket, 4000)
    },
    stopAuto: function () {
      var highestTimeoutId = setTimeout(function () { ';' }, 0)
      for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i)
      }
      this.reRocket()
    },
    getRandom: function () {
      return Math.floor(Math.random() * (2000 - 110 - 1) + 110)
    }
  }
})

const bodyId = document.getElementById('body')
bodyId.addEventListener('keyup', keyUpBody)

function keyUpBody (e) {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 97:
    case 49:
      document.querySelector('.rocket1').style.bottom = '2000px'
      break
    case 98:
    case 50:
      document.querySelector('.rocket2').style.bottom = '2000px'
      break
    case 99:
    case 51:
      document.querySelector('.rocket3').style.bottom = '2000px'
      break
    case 32:
      let el = document.querySelectorAll('.rocket')
      el.forEach(item => {
        item.style.bottom = '101px'
      })
      break
    case 13:
      let str = document.querySelectorAll('.rocket')
      str.forEach(item => {
        item.style.bottom = '2000px'
      })
      break
  }
}
