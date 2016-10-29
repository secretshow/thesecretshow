$(document).ready(function(){
    var easter_egg = new Konami(function() { window.location.assign("secret.html");});
    $("#title").hide(0).delay(25).fadeIn(2000);
    $("#nav").hide(0).delay(50).slideDown(2600);

    document.querySelector('#sign').addEventListener('click',(e)=>{
      var database = firebase.database();
      var e = document.querySelector('#gEmail').value;
      database.update({users: {email: e}});
    });
});
