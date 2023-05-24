let str = prompt("STR");
let juft = 0;
let toq = 0;


for (let i = 0; i < str.length; i++) {

    if (str[i] % 2 == 0) {
        juft++;

        if (str[i] == " ") {
            juft--;
        }
    }


    if (str[i] % 2 == 1) {
        toq++;
    }

}


console.log("Juft:", juft);
console.log("Toq:", toq);