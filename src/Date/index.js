
/**
 * @param date {Date}
 * @return {number}
 */
export const getYearsSinceDate = date => {
    const today = new Date();
    let years = today.getFullYear() - date.getFullYear();
    const months = today.getMonth() - date.getMonth();
    if (
        months < 0 ||
        (months === 0 && today.getDate() < date.getDate())
    ) {
        years--;
    }
    return years;
};

/**
 * @param dateInString {string}
 * @return {Date}
 */
export const stringToDateUTC = dateInString => {
    // Timestamp case
    if (!isNaN(Number(dateInString))) {
        return new Date(Number(dateInString) * 1000);
    }

    // MySQL date case
    if ((new RegExp('^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$')).test(dateInString)) {
        return new Date(dateInString + 'Z');
    }

    return new Date(dateInString);
};
