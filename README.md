# send-message-whatsapp-js

"box-chat-simple" for sending messages to wpp using javascript.

## Preview

![GitHub Logo](/msg-wpp/img/screen.PNG)
Format: ![example](url)

## how to use

```html
<div class="box-body">
  <input id="msg" placeholder="digite sua mensagem">
  <a><i class="fa fa-paper-plane" aria-hidden="true" onclick="send()"></i></a>
</div>
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
