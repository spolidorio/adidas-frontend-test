// # Asynchronous code with promises

// Write a function `wait` which delays the execution for some given milliseconds and returns a promise.

// ## Definition of the function

// 1. Implement the function so it resolves a promise after the delay.
// 2. Modify it to reject the promise if the delay value is invalid.

// ## Execution of the function
// 1. Write a promise chain which prints `hello` after two seconds and `world!` right after it (using `console`).
// 2. Write a promise chain which:
//     1. Prints `hello` after two seconds or prints `goodbye` if there is an error.
//     2. Prints `world!` two seconds right after the previous step (for both, success and error execution). Note: you can use `setTimeout` built-in function.

export async function wait(delay?: any) {
  return new Promise<void>(async (resolve, reject) => {
    await new Promise((resolve, reject) => {
      const _isNumber = typeof delay === "number";
      const _timeOut = _isNumber ? delay : 2000;
      setTimeout(() => {
        const _text = _isNumber ? "hello" : "goodbye";
        resolve(console.log(_text));
      }, _timeOut);
    });

    setTimeout(() => {
      resolve(console.log("world!"));
    }, 2000);
  });
}
