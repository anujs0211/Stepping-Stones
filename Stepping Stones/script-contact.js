function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
    if(e == "" || e == null ){
        document.getElementById('emailLabel').innerHTML = ('Please enter your email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
    if(s == "" || s == null ){
        document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }
    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    }
  
    else{
          return true;
      }
      
}

      