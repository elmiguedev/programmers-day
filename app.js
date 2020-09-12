function dayNumber(date) {
    const year =  date.getUTCFullYear();
    const yearStart = Date.UTC(year, 0, 1);
    const msDayLength = 1000 * 60 * 60 * 24; // 24 hours, 60 minutes, 60 seconds, 1000 ms per second :P
    const dayNumber = Math.floor((date - yearStart)/msDayLength) +1;
    return dayNumber;
}

if (dayNumber(new Date()) == 0x100) {
    console.log("Happy Programmer's Day!!");
} else {
    console.log("CODE CODE CODE!!!! >:D ");
}
