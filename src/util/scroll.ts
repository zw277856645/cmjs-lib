/**
 * 平滑滚动到指定距离
 *
 * @param target dom element/window/css selector
 * @param y 目标位置
 */
import { getScrollTop, setScrollTop } from './dom';

let timeOutFlags: any[] = [];

export function smoothScroll2YPosition(target: any, y: number, callback?: Function) {
    if (timeOutFlags.length) {
        timeOutFlags.forEach(flag => clearTimeout(flag));
        timeOutFlags = [];
    }

    let curY = getScrollTop(target);
    let distance = Math.abs(curY - y);

    if (distance < 50) {
        return setScrollTop(target, y);
    }

    let speed = Math.round(distance / 50);
    if (speed >= 20) {
        speed = 20;
    }
    let step = Math.round(distance / 50);
    let leapY = y > curY ? curY + step : curY - step;
    let timer = 0;
    let maxDuration = 0;

    if (y > curY) {
        for (let i = curY; i < y; i += step) {
            scrollTo(leapY, timer * speed);
            maxDuration = timer * speed;
            leapY += step;
            if (leapY > y) {
                leapY = y;
            }
            timer++;
        }
    } else {
        for (let i = curY; i > y; i -= step) {
            scrollTo(leapY, timer * speed);
            maxDuration = timer * speed;
            leapY -= step;
            if (leapY < y) {
                leapY = y;
            }
            timer++;
        }
    }

    timeOutFlags.push(
        setTimeout(() => {
            if (typeof callback === 'function') {
                callback();
            }
        }, maxDuration)
    );

    function scrollTo(y: number, duration: number) {
        timeOutFlags.push(setTimeout(() => setScrollTop(target, y), duration));
    }
}