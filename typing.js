let i = 0;
let text = "The largest community of photo enthusiasts";
let curText = document.getElementById("typing-effect").innerHTML;

console.log(curText)

function typeWriter() {

  if (i < text.length) {
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 110);
  }
}
