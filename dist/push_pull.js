"use strict";
function Hello() {
    console.log("Hello");
}
Hello();
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello from a promise!');
        }, 1000);
    });
}
;
myPromise().then((result) => {
    console.log('result:', result); // Hello from a promise!
});
