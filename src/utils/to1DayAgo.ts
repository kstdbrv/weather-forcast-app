const today = new Date().getTime()
const days = 86400000 //number of milliseconds in a day
const oneDayAgo:string = new Date(today - (1 * days)).toJSON().slice(0, 10)

export default oneDayAgo