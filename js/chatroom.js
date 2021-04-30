var room_magnitude=5;
function appendrooms(){
    for(var i=0;i<room_magnitude;i++){
        $("#chat-record").append(".chat-record")
    }
}
$("#chat-record").ready(function(){
    appendrooms();
}
$(".chat-room-text").ready(function(){
    $.post("demo_test_post.asp", {
        chatroomID:
    },
    function(header,room_name,first_message){
    
  });
});
$(document).ready(function(){
    // Navbar icon actions
        $("#create-chat-button").click(function (){
            console.log("create chat");
            $(".create-chat-menu").removeClass("hidden").addClass("show");
        });
});
