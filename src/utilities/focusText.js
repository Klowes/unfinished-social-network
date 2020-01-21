/**
 * @summary Focuses element, selects last character of element
 *  and scrolls whatever scrollable container the text sits within to bottom of element
 */
const focusText = element => {
    const textLength = element.value.length;
    element.focus();
    //IE
    if (document.selection) {
        let oSel = document.selection.createRange();
        oSel.moveStart('character', -textLength);
        oSel.moveStart('character', textLength);
        oSel.moveEnd('character', 0);
        oSel.select();
    }
    //FF/CH
    else {
        element.setSelectionRange(textLength, textLength);
    }
    element.scrollIntoView(false);
};

export default focusText;