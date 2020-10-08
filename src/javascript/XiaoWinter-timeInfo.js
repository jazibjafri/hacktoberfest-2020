// Gets the year, month ,day hour,minutes,seconds,milliseconds and timestamp of the time object ,
// And all of them are string ,If it's less than 10, we fill in the 0 first , For formatting
const timeInfo = date =>{

    if(!(date instanceof Date)) throw Error("date's type isn't Date")

    let year = date.getFullYear()+''
    let month = (date.getMonth() + 1)<10 ? "0"+(date.getMonth() + 1):(date.getMonth() + 1)+''
    let day = date.getDate()<10 ? "0"+date.getDate() : date.getDate()+''
    let hour = date.getHours()<10 ? "0"+date.getHours() : date.getHours()+''
    let minutes = date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes()+''
    let seconds = date.getSeconds()<10 ? "0"+date.getSeconds():date.getSeconds()+''
    let milliseconds = date.getMilliseconds()+''
    let timestamp = date.getTime()+''

        return {
            year,
            month,
            day,
            hour,
            minutes,
            seconds,
            milliseconds,
            timestamp,
        }
}



console.log(timeInfo(new Date))