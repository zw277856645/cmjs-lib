// 获取文本框光标位置
export function getInputCursorIndex(txt: HTMLInputElement) {
    let cursorPosition = -1;
    if (txt.selectionStart !== undefined) {
        cursorPosition = txt.selectionStart;
    } else {
        let range = (<any>document).selection.createRange();
        range.moveStart('character', -txt.value.length);
        cursorPosition = range.text.length;
    }
    return cursorPosition;
}

// 设置文本框光标位置
export function setInputCursorIndex(txt: HTMLInputElement, pos: number) {
    if (txt.setSelectionRange) {
        txt.focus();
        txt.setSelectionRange(pos, pos);
    } else if ((<any>txt).createTextRange) {
        let range = (<any>txt).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

// 复制dom到剪切板
export function copyDom(ele: HTMLElement) {
    let range = document.createRange();
    range.selectNodeContents(ele);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeRange(range);
}