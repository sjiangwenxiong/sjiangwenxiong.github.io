function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const genRandStrNum = () => {
  return Array(6).fill(null).map( function(item){ return Math.round( Math.random()*(10-1-1) ) + 1 } ).join('');
}

module.exports = {
  formatTime: formatTime,
  genRandStrNum: genRandStrNum
}
