function Hello(): void {
    console.log("Hello");
}

Hello();


function myPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello from a promise!');
    }, 1000);
  });
}; 

myPromise().then((result) => {
  console.log('result:', result) // Hello from a promise!
});