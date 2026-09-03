const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rectangle1=document.getElementById("rectangle1-ft")
let rectangle2=document.getElementById("rectangle2-ft")


function generate(){
    let password1=''
    let password2=''
    for(let i=0;i<16;i++){
    let pw1=Math.floor(Math.random()*characters.length)
    let pw2=Math.floor(Math.random()*characters.length)
password1+=characters[pw1]
password2+=characters[pw2]

}
rectangle1.textContent=password1
    rectangle2.textContent=password2
}

