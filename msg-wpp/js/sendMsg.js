document.getElementById("msg").maxLength = "100";

function show(){
  var div = document.getElementById('box-wpp');
  div.style.display = "block";

  var mobileDetect = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if(mobileDetect){
    var div = document.getElementById('box-wpp');
    div.style.display = "none";
    window.location = 'whatsapp://send?text=&phone=YOUR_PHONE&abid=YOUR_PHONE';
  }
  
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