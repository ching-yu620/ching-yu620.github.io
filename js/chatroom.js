var room_magnitude=5;
var chat_room="
<div class='chat-room'>
    <img id='chat-header'src='../resources/nav/create_chat.png'/>
    <div class='chat-room-text'>
    <h4 id='chat-group-name'>鄭青宇</h4>
    <h5 id='chat-firstline'>哈哈哈哈哈哈哈哈</h5>
</div>
</div>";
function appendrooms(){
    for(var i=0;i<room_magnitude;i++){
        $("#chat-record").append("chatroom")
    }
}
$("#chat-record").ready(function(){
    appendrooms();
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
            $(".create-chat-menu").removeClass("hidden").addClass("show");
        });
});
