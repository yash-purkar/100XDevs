## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

Answer =>

let counter = 0;
const increaseCount = () => {
setTimeout(()=>{
counter++;
console.log(counter);
increaseCount();
}, 1000)
}

increaseCount();

(Hint: setTimeout)
