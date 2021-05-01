var room_magnitude=5;
var friend_magnitude=5;
var mission_magnitude=5;
var chatroom="<div class='chat-room'><img id='chat-header'src='../resources/nav/create_chat.png'/><div class='chat-room-text'><h4 id='chat-group-name'>鄭青宇</h4><h5 id='chat-firstline'>哈哈哈哈哈哈哈哈</h5></div></div>";
var header_name,group_name,firstline;
var friends,missions;
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
$("#chat-choose-missions").ready(function(){
    appendmissionss();
});
$("#chat-choose-friends").ready(function(){
    appendfriendss();
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
    // Navbar icon actions
        $("#create-chat-button").click(function (){
            console.log("create chat");
            $("#chat-choose-missions").removeClass("hidden").addClass("show");
            //$(".choosed-mission").removeClass("hidden").addClass("show");
            $(".chat-cover").removeClass("hidden").addClass("show");
        });
});
