var personal_ID;

var room_magnitude=5;
var friend_magnitude=5;
var mission_magnitude=5;

var chatroom="<div class='chat-room'><img id='chat-header'src='../resources/nav/create_chat.png'/><div class='chat-room-text'><h4 id='chat-group-name'>鄭青宇<br></h4><h5 id='chat-firstline'>哈哈哈哈哈哈哈哈</h5></div></div>";
var header_name,group_name,firstline;
var missions="<input type='radio' name='choose_mission' id='C_M'><label for='C_M'><div class='choosed-mission unchosen'><h3>和陌生的你夜衝</h3></div></label>";
var friends="<input type='checkbox' name='choose_friend' id='C_F'><label for='C_F'><div class='choosed-friend unchosen'><img src='../resources/nav/create_chat.png'/><h3>鄭青宇</h3></div>";
function choose_mission(){
    var obj=document.getElementsByName("choose_mission");
    var len = obj.length;
    for(var i=len-1;i>=0;i--){
        if(obj[i].checked==true){
            console.log(len+"missions");
            $(".choosed-mission[i]").removeClass("unchosen").addClass("chosen");
            $(".button-sure").removeClass("hidden").addClass("show");
        }
    }
}
function choose_friend(){
    var obj=document.getElementsByName("choose_friend");
    var len = obj.length;
    for(var i=len-1;i>=0;i--){
        if(obj[i].checked==true){
            console.log(len+"missions");
            $(".choosed-friend[i]").removeClass("unchosen").addClass("chosen");
            $(".button-creategroup").removeClass("hidden").addClass("show");
        }
    }
}

function modify_chatroom(){
    chatroom="<div class='chat-room'><img id='chat-header'src="+header_name+"/><div class='chat-room-text'><h4 id='chat-group-name'>"+group_name+"</h4><h5 id='chat-firstline'>+firstline+</h5></div></div>";
}
function appendrooms(){
    for(var i=0;i<room_magnitude;i++){
        $("#chat-record").append(chatroom)
    }
}
function appendmissions(){
    for(var i=0;i<mission_magnitude;i++){
        $("#chat-choose-missions").append(missions)
    }
}
function appendfriends(){
    for(var i=0;i<friend_magnitude;i++){
        $("#chat-choose-friends").append(friends)
    }
}
$("#chat-record").ready(function(){
    
    appendrooms();
    
     $.post("??.json", {
        personal_ID;
    } ,
    function(chatrooms){
        
    });
    
    

});
$(".create-chat-menu").ready(function(){
    console.log("fuck you");
    appendmissions();
});
$("#chat-choose-friends").ready(function(){
    appendfriends();
});
$(".chat-room-text").ready(function(){
    $.post("demo_test_post.asp", {
        chatroomID:"123"
    }
    ,
    function(header,room_name,first_message){
        console.log("create chatroom");
    });
});

$(document).ready(function(){
    $("#create-chat-button").click(function (){
        console.log("create chat");
        $("#chat-choose-missions").removeClass("hidden").addClass("show");
        $(".chat-cover").removeClass("hidden").addClass("show");
    });
    $(".chat-room").click(function (){
        $("#chat-main").removeClass("show").addClass("hidden");
        $("#chat-create-room").removeClass("hidden").addClass("show");
    });
    $(".choosed-mission").click(function (){
       choose_mission();
    });
     $(".button-sure").click(function (){
       $("#chat-choose-missions").removeClass("show").addClass("hidden");
       $("#chat-choose-friends").removeClass("hidden").addClass("show");
       $(".button-sure").removeClass("show").addClass("hidden");
    });
    $(".choosed-friend").click(function (){
       choose_friend();
    });
     $(".button-creategroup").click(function (){
       $("#chat-choose-friends").removeClass("show").addClass("hidden");
       $(".button-creategroup").removeClass("show").addClass("hidden");
       $(".chat-cover").removeClass("show").addClass("hidden");
    });
});



