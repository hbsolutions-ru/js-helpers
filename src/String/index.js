
/**
 * @param string {string}
 * @param maxLength {int}
 * @return {*}
 */
export const cutToSpace = (string, maxLength) => {
    string = string.slice(0, maxLength + 1);
    return string.slice(0, Math.min(string.length - 1, string.lastIndexOf(' ')));
};
