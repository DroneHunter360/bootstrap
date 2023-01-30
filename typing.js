let i = 0;
let text = "Welcome to photopia, stay awhile!";
let curText = document.getElementById("typing-effect").innerHTML;

console.log(curText)

function typeWriter() {

  if (i < text.length) {
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 110);
  }
}
