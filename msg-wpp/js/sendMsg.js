document.getElementById("msg").maxLength = "100";

function show(){
  var div = document.getElementById('box-wpp');
  div.style.display = "block";
}

function fechar(){
  var div = document.getElementById('box-wpp');
  div.style.display = "none";
}

function send(){
  var message = document.getElementById('msg');
  let url = `https://web.whatsapp.com/send?phone=YOUR_PHONE&text=${encodeURIComponent(msg.value)}`;
  let a = document.createElement('a')
  a.target = '_blank'
  a.href = url 
  a.click();
}

