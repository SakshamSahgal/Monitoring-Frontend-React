function convertIsoToNormalTime(isoTimeString) {
    const isoTime = new Date(isoTimeString);

    const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const formattedDate = isoTime.toLocaleString(undefined, dateOptions);
    const formattedTime = isoTime.toLocaleString(undefined, timeOptions);

    return {
        date: formattedDate,
        time: formattedTime,
    };
}

function getTimeElapsed(isoTimeString) {
    const isoTime = new Date(isoTimeString);
    const currentTime = new Date();

    const elapsedMilliseconds = currentTime - isoTime;
    const seconds = Math.floor(elapsedMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
}

function NameToTime(FileName) {
    // console.log(new Date(parseInt(((FileName).split("_")[1]).split(".")[0])))
    let thisDate = new Date(parseInt(((FileName).split("_")[1]).split(".")[0]))
    return thisDate.toLocaleString()
}

function NameToTimeElapsed(FileName){
    return getTimeElapsed(parseInt(((FileName).split("_")[1]).split(".")[0]))
}

export { convertIsoToNormalTime, getTimeElapsed, NameToTime, NameToTimeElapsed };