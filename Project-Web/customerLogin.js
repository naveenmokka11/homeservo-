let login = document.querySelector('. button1');
// console.log(login);
let uname = document.getElementById('uname');
let pwd = document.getElementById('pwd');

login.addEventListener('click',()=>{
  window.sessionStorage.setItem('username',uname.value);
  window.sessionStorage.setItem('password',pwd.value);

  uname.value = '';
  pwd.value = '';
},false);

