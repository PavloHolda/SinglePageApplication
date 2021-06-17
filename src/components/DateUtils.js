const DateUtils = date => {
    const newDate = new Date(date);

    let newObj = {
        day: newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate() ,
        month: newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1
    }
    return newObj
}

export default DateUtils;


