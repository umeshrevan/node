function checkData(){
    var enterEmail = document.getElementById('email').value;
    var enterPwd = document.getElementById('pwd').value;

    //get data from local storage

    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if(enterEmail == getEmail)
    {
        if(enterPwd == getPwd)
        {
        alert("Login successful");
        }
        else
        {
        alert("Wrong passord");
        }
    }
    else
    {
        alert("Invalid details");
    }
}