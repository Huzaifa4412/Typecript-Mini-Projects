import * as promptSync from "prompt-sync";
const prompt = promptSync();
function reverse() {
    let name: string = prompt("Enter your name  : ").toLowerCase();
    var reverse = ""
    for (let i = name.length - 1; i >= 0; i--) {
        reverse = reverse + name[i];
    }
    console.log(reverse);
}
reverse()
