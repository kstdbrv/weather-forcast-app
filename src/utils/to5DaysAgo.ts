const today = new Date().getTime()
const days = 86400000 //number of milliseconds in a day
const fiveDaysAgo:string = new Date(today - (5 * days)).toJSON().slice(0, 10)

export default fiveDaysAgo