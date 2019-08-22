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

export function getOffset(elem: HTMLElement) {
    if (!elem) {
        return { left: 0, top: 0 };
    }

    let top = 0, left = 0;

    if ('getBoundingClientRect' in document.documentElement) {
        let box = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0;

        top = box.top + (window.pageYOffset || docElem && docElem.scrollTop || body.scrollTop) - clientTop;
        left = box.left + (window.pageXOffset || docElem && docElem.scrollLeft || body.scrollLeft) - clientLeft;
    } else {
        do {
            top += elem.offsetTop || 0;
            left += elem.offsetLeft || 0;
            elem = elem.offsetParent as HTMLElement;
        } while (elem);
    }

    return { left, top };
}

export function getScrollTop(ele: Window | Document | Element) {
    if (ele === window || ele === document) {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    } else {
        return (ele as Element).scrollTop;
    }
}

export function getScrollLeft(ele: Window | Document | Element) {
    if (ele === window || ele === document) {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
    } else {
        return (ele as Element).scrollLeft;
    }
}

export function setScrollTop(ele: Window | Document | Element, top: number = 0) {
    if (ele === window || ele === document) {
        window.scrollTo(getScrollLeft(ele), top);
    } else {
        (ele as Element).scrollTop = top;
    }
}

export function setScrollLeft(ele: Window | Document | Element, left: number = 0) {
    if (ele === window || ele === document) {
        window.scrollTo(left, getScrollTop(ele));
    } else {
        (ele as Element).scrollLeft = left;
    }
}

export function isHidden(ele: Element) {
    return !isVisible(ele);
}

export function isVisible(ele: Element) {
    return (ele as HTMLElement).offsetWidth > 0 && (ele as HTMLElement).offsetHeight > 0;
}

export function getStyle(ele: Element, style: string) {
    return (((ele as HTMLElement).style && (ele as HTMLElement).style[ style ])
        || getComputedStyle(ele)[ style ]);
}

export function getOuterWidth(ele: Window | Document | Element, withMargin?: boolean) {
    if (ele === window) {
        return document.documentElement.clientWidth;
    } else if (ele === document) {
        return Math.max(
            document.body.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.scrollWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    } else {
        let width = (ele as HTMLElement).offsetWidth;

        if (withMargin) {
            let style = getComputedStyle(ele as Element);
            width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        }

        return width;
    }
}

export function getOuterHeight(ele: Window | Document | Element, withMargin?: boolean) {
    if (ele === window) {
        return document.documentElement.clientHeight;
    } else if (ele === document) {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );
    } else {
        let height = (ele as HTMLElement).offsetHeight;

        if (withMargin) {
            let style = getComputedStyle(ele as Element);
            height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        }

        return height;
    }
}