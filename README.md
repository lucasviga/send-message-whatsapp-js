# send-message-whatsapp-js

"simple-chat-box" for sending messages to wpp using javascript.

## Preview

![GitHub Logo](/msg-wpp/img/screen.PNG)

## how to use

```html
<div id="box-wpp">
    <div class="box-header"><h2>Contact</h2></div>  
    <div class="box-body">
        <input id="msg" placeholder="digite sua mensagem">
        <a><i class="fa fa-paper-plane" aria-hidden="true" onclick="send()"></i></a>
    </div>   
    <div class="box-footer">
        <a onclick="fechar()"><i class="fa fa-chevron-left" aria-hidden="true"></i> Fechar</a>
    </div>
</div>
       
<a><img src="img/icons8-whatsapp.svg" class="btn-wpp pulse" onclick="show()"></a>
```

```javascript
function send(){
  var message = document.getElementById('msg');
  let url = `https://web.whatsapp.com/send?phone=YOUR_PHONE&text=${encodeURIComponent(msg.value)}`;
  let a = document.createElement('a')
  a.target = '_blank'
  a.href = url 
  a.click();
}
```
change the "YOUR_PHONE" to your phone from your contact
