function speak(id){
  var txt = document.getElementById(id).innerText;
  var u = new SpeechSynthesisUtterance(txt);
  u.lang='ar-SA';
  u.rate=0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

function showSuccess(msg){
  msg = msg || 'تمت إضافة طلبك بنجاح! ✅';
  var msgEl = document.getElementById('success-msg') || document.createElement('div');
  msgEl.id = 'success-msg';
  msgEl.innerHTML = msg;
  msgEl.style.display = 'block';
  msgEl.style.background = '#d4edda';
  msgEl.style.color = '#155724';
  msgEl.style.padding = '12px';
  msgEl.style.borderRadius = '6px';
  msgEl.style.marginTop = '10px';
  msgEl.style.fontSize = '13px';
  msgEl.style.border = '1px solid #c3e6cb';
  msgEl.style.animation = 'slideIn .3s ease-in';
  
  if(!document.getElementById('success-msg')){
    document.body.appendChild(msgEl);
  }
  
  setTimeout(()=>{
    msgEl.style.display = 'none';
  }, 3000);
}

let currentZoom = 100;

function zoomIn(){
  currentZoom += 10;
  document.body.style.zoom = currentZoom + '%';
}

function zoomOut(){
  if(currentZoom > 50){
    currentZoom -= 10;
    document.body.style.zoom = currentZoom + '%';
  }
}

let h=12,m=45,s=30;
if(document.getElementById('h')){
  setInterval(()=>{
    s--;
    if(s<0){s=59;m--;}
    if(m<0){m=59;h--;}
    if(h<0)h=23;
    document.getElementById('h').textContent=String(h).padStart(2,'0');
    document.getElementById('m').textContent=String(m).padStart(2,'0');
    document.getElementById('s').textContent=String(s).padStart(2,'0');
  },1000);
}