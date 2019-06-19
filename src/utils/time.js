export function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        let plural = Math.round(elapsed / 1000) !== 1;
         return Math.round(elapsed/1000) + ' sec' + (plural ? 's' : '') + ' ago';
    }

    else if (elapsed < msPerHour) {
            let plural = Math.round(elapsed / msPerMinute) !== 1;
         return Math.round(elapsed/msPerMinute) + ' min' + (plural ? 's' : '') + ' ago';
    }

    else if (elapsed < msPerDay ) {
        let plural = Math.round(elapsed / msPerHour) !== 1;
         return Math.round(elapsed/msPerHour ) + ' hour' + (plural ? 's' : '') + ' ago';
    }

    else if (elapsed < msPerMonth) {
        let plural = Math.round(elapsed / msPerDay) !== 1;
        return Math.round(elapsed/msPerDay) + ' day' + (plural ? 's' : '') + ' ago';
    }

    else if (elapsed < msPerYear) {
        let plural = Math.round(elapsed / msPerMonth) !== 1;
        return Math.round(elapsed/msPerMonth) + ' month' + (plural ? 's' : '') + ' ago';
    }

    else {
        let plural = Math.round(elapsed / msPerYear) !== 1;
        return Math.round(elapsed/msPerYear ) + ' year' + (plural ? 's' : '') + ' ago';
    }
}
