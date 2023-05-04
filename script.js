let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
}



// Declare your genre arrays here
let Random = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroAuksdBzM1bcPfKouk5HsPUZ-ZILZSgiiA&usqp=CAU", "https://i1.sndcdn.com/artworks-xcQ6VeU8Hbd5F47h-XuAGbQ-t500x500.jpg", "https://www.lahiguera.net/musicalia/artistas/natalia_lafourcade/disco/6582/tema/10770/natalia_lafourcade_lo_que_construimos-portada.jpg", "https://www.cromosomax.com/pics/2013/02/bruno-mars-when-i-was-your-man-video.jpg"];
console.log(Random);


let Romantic = ["https://upload.wikimedia.org/wikipedia/en/7/78/Mi_Buen_Amor.jpg", "https://res.cloudinary.com/dzdgpwtox/image/upload/v1658316056/designer-tool-uploads/bucket_9470/1658316053898.png", "https://i.ytimg.com/vi/HZcRKJf7rOI/maxresdefault.jpg"];
console.log(Romantic);

let Rock = ["https://i1.sndcdn.com/artworks-000571586171-8k9g4r-t500x500.jpg", "https://ia803009.us.archive.org/BookReader/BookReaderImages.php?zip=/8/items/RadioheadCreepSheetMusic/Creep_Sheet_music_jp2.zip&file=Creep_Sheet_music_jp2/Creep_Sheet_music_0000.jp2&id=RadioheadCreepSheetMusic&scale=4&rotate=0", "https://f4.bcbits.com/img/a3045931839_10.jpg"];
console.log(Rock);
// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");

// Submit Button 
let submitButton = document.querySelector(".button1");
submitButton.onclick = function(input1) {};
submitButton.onclick = function() {
    let input1 = document.querySelector(".input1").value;
    if (input1 === "Random") {
        for (let RandomSong of Random) {
            let img = "<img src=" + RandomSong + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (input1 === "Romantic") {
        for (let RomanticSong of Romantic) {
            let img = "<img src=" + RomanticSong + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (input1 === "Rock") {
        for (let RockSong of Rock) {
            let img = "<img src=" + RockSong + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }
};
let suggestButton = document.querySelector(".button2");
suggestButton.onclick = function() {
    let suggestInput = document.querySelector(".input2").value;
    Random.push(suggestInput);
    Romantic.push(suggestInput);
    Rock.push(suggestInput);

    let img = "<img src=" + suggestInput + ">";
       result.insertAdjacentHTML("beforeend", img + "<p>" + "Thanks for your suggestion!"+ "</p>");
    
};