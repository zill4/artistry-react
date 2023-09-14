"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.waitAnimation = exports.wait = void 0;
function wait(time) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, time);
    });
}
exports.wait = wait;
function waitAnimation(time) {
    return new Promise((resolve) => {
        if (time) {
            window.setTimeout(() => {
                window.requestAnimationFrame(resolve);
            }, time);
        }
        else {
            window.requestAnimationFrame(resolve);
        }
    });
}
exports.waitAnimation = waitAnimation;
function setState(state, thisArg) {
    return new Promise((resolve) => {
        thisArg.setState(state, () => {
            resolve();
        });
    });
}
exports.setState = setState;
//# sourceMappingURL=PromiseUtil.js.map