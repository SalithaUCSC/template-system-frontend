import {showAlert} from "./AlertService";

export const validateDates = (cardStartDate, cardEndDate) => {
    let d1 = new Date(cardStartDate);
    let d2 = new Date(cardEndDate);
    if ((d2 < d1) || (d1 > d2)) showAlert("Error!", "error", "End Date cannot be lower than Start date!");
}

export const getTimeDuration = (cardStartDate, cardEndDate) => {
    let res;
    let d1 = new Date(cardStartDate);
    let d2 = new Date(cardEndDate);
    let seconds = Math.floor((d2 - d1) / 1000),
    minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    months  = Math.floor(days / 30),
    years   = Math.floor(days / 365);
    days %= 30;
    months %= 12;
    if (years === 0) {
        res = months + " Months " + days + " Days"
        if (months === 0) {
            res = days + " Days"
        }
    } else {
        res = years + " Years " + months + " Months " + days + " Days";
        if (months === 0) {
            res = years + " Years " + days + " Days";
        }
    }
    console.log(res)
    return res;
}