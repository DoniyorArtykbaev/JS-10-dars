let users = [
  {
    login: "Doni",
    password: "123456"
  }
];

$(document).ready(function(){
    $(".btn-success").click(function(){
        let login = $("#login").val();
        let password = $("#password").val();
        let result = false;

        if(login == ""){
            alert("Login qattorini tolditing!")
        }
        else if(password == ""){
            alert("Parol qatorini toldiring")
        }
        else{
            if(users.length !=0){
                users.forEach(function(item){
                    if(login == item.login){
                        if(password == item.password){
                            result = true;
                            alert("Siz tizimga kirdingiz!");
                        }
                        else{
                            alert("Parolingiz notog'ri!")
                        }
                    }
                });
                if(!result){
                    alert("Iltimos, ro'yxatan o'ting ")
                }
            }
            else{
                    alert("Siz yangi foydalanuvchisiz. Iltimos, ro'yxatdan o'ting!")   
        }
        }
    });
    $(".btn-link").click(function(){
        let login = $("#login").val();
        let password = $("#password").val();
        let result = false;

        if(login == ""){
            alert("Login qatorini toldiring");
        }
        else if (password == ""){
            alert("Parolni qatorni to'ldirng!");
        }
        else{
            if(users.length !=0){
                users.forEach(function(item){
                    if(login == item.login){
                        result = true;
                    }
                });
                if(result){
                    alert("Bunday foydalanuvchi mavjut!");
                }
                else{
                    alert("Qoyil. Siz ro'yxatdan o'tdingiz!")
                    users.push({login: login, password:password});
                }
            }else{
                users.push({login: login, password:password});
            }
            console.log(users);
        }
    });
    $(".btn-light").on("mousedown",function(){
        let attr = $("#password").attr("type");
        $("#password").attr("type","text");
        $(".fa").toggleClass("fa-eye fa-eye-slash");
        $("#password").css("border","3px solid red")
    });
$(".btn-light").on("mouseup",function(){
    let attr = $("#password").attr("type");
    $("#password").attr("type","password");
    $(".fa").toggleClass("fa-eye fa-eye-slah");
})
});