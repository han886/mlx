/**
 *
 * 2017/9/7 by qinjingxian
 **/

import Vue from 'vue'
const vueProto = Vue.prototype
vueProto.getRandomList = function(list) {
  let randomListLength = 9
  let randomList = []
  let randomIndexs = []
  let randomIndex = 0
  if (list.length > randomListLength){
    while (1) {
      randomIndex = this.randomNum(0, list.length - 1)
      if (randomIndexs.indexOf(randomIndex) == -1) {
        randomIndexs.push(randomIndex)
        randomList.push(list[randomIndex])

        if (randomIndexs.length == randomListLength) {

          break
        }

      }

    }
  }
  else {
    randomList = list
  }
  return randomList
}
vueProto.randomNum = function(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
