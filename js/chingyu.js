var personal_ID;
var chatroom_ID;
var friend_ID;
var person_ID;
var friend_list;
var mission_list;
var header_pic,group_name,firstline;
var friend_header,friend_name;
var mission_name;
var output_mission,output_friend;
var person_header,person_name;
var your_message;
var i=0;

var room_magnitude=5;
var friend_magnitude=5;
var mission_magnitude=5;

//some text need to be modified by variable
var chatroom="<div class='chat-room'><img id='chat-header'src='../resources/nav/create_chat.png'/><div class='chat-room-text'><h4 id='chat-group-name'>鄭青宇<br>哈</h4><h5 id='chat-firstline'>哈哈哈哈哈哈哈哈</h5></div></div>";
var missions="<input type='radio' name='choose_mission' id='C_M"+i+"'><label for='C_M'><div class='choosed-mission unchosen'><h3>和陌生的你夜衝</h3></div></label>";
var friends="<input type='checkbox' name='choose_friend' id='C_F'><label for='C_F'><div class='choosed-friend unchosen'><img src='../resources/nav/create_chat.png'/><h3>鄭青宇</h3></div>";

//chat page
function choose_mission(){
    var obj=document.getElementsByName("choose_mission");
    var len = obj.length;
    for(i=len-1;i>=0;i--){
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
    for(i=len-1;i>=0;i--){
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
    for(i=0;i<mission_magnitude;i++){
        $("#chat-choose-missions").append(missions)
    }
}
function appendfriends(){
    for(i=0;i<friend_magnitude;i++){
        $("#chat-choose-friends").append(friends)
    }
}
function newgroup(){
    $.post("??.json", {
        personal_ID,
        output_mission,
        output_friend
    } ,
    function(){
        //maybe need to go ahead into the chatroom
    });
}
function findfriend(){
    const search_friend=document.forms['group-search-friend'];
    const name = search_friend.elements.friendtosearch.value;
    
    for(i=0;i<friend_list.length;i++){
        if(friend_list.name==name){
            //show the friend
        }else{
            //show nothing
        }
    }
}
function findmission(){
    const search_mission=document.forms['group-search-mission'];
    const name = search_mission.elements.missiontosearch.value;
    
    for(i=0;i<mission_list.length;i++){
        if(mission_list.name==name){
            //show the mission
            break;
        }else{
            //show nothing
        }
    }
}
function sendmessage(){
     $.post("??.json", {
        personal_ID,
        your_message
    } ,
    function(){
        //put a new my-message into chat-content
    });
}
function chatwithfriend(){
    $.post("??.json", {
        personal_ID,
        friend_ID
    } ,
    function(chatroom_ID){
        //go into the chatroom
    });
}
//chat page
$("#chat-record").ready(function(){
    
     $.post("??.json", {
        personal_ID
    } ,
    function(chatrooms){
        //header_pic=?
        //group_name=?
        //first_line=?
        //then modified them in appendrooms();
    });
    appendrooms();
    

});
$("#chat-choose-missions").ready(function(){
    $.post("??.json", {
        personal_ID
    } ,
    function(missions){
        //mission_name=?
        //modified them in appendmissions();
    });
    appendmissions();
});
$("#chat-choose-friends").ready(function(){
    $.post("??.json", {
        personal_ID
    } ,
    function(friends){
        //header_pic=?
        //friend_name=?
        //modified them in appendfriends();
    });
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


//friend page
function appendfriendsformenu(){

}
//friend page
$("#friend-record").ready(function(){
    
     $.post("??.json", {
        personal_ID
    } ,
    function(friends){
        //header_pic=?
        //friend_name=?
        //modified them in appendfriends();
    });
    appendfriendsformenu();
    

});
//mypage page
function findperson(){
    $.post("??.json", {
        person_ID
    } ,
    function(){
        //person_header=?
        //person_name=?
    });
}
function addfriend(){
    $.post("??.json", {
        person_ID
    } ,
    function(){
        //refresh friend-record
    });
}
//mypage page
$("#mypage-record").ready(function(){
     $.post("??.json", {
        personal_ID
    } ,
    function(/*multiple data*/){
        document.getElementById("chat-room-name").innerHTML = "";//modify some div
    });
    appendfriendsformenu();
    

});

//functions which is click
$(document).ready(function(){
    $("#create-chat-button").click(function (){
        console.log("create chat");
        $("#chat-choose-missions").removeClass("hidden").addClass("show");
        $(".chat-cover").removeClass("hidden").addClass("show");
    });
    $(".chat-room").click(function (){
        document.getElementById("chat-room-name").innerHTML = "";//how to recognize which room it is
        $.post("??.json", {
            personal_ID,
            chatroom_ID
        } ,
        function(message,member){
            //if name=me modify id my-message
            //if name=other modify id other-message
            //compare ID with member to show header and name
        });
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
    
    
    
    //friend page
    $(".single-friend").click(function (){
       $.post("??.json", {
            personal_ID,
            friend_ID
        } ,
        function(CR_ID){
            //chatroom_ID=CR_ID
        });
        document.getElementById("chat-room-name").innerHTML = "";//how to recognize which room it is
        $.post("??.json", {
            personal_ID,
            chatroom_ID
        } ,
        function(message,member){
            //if name=me modify id my-message
            //if name=other modify id other-message
            //compare ID with member to show header and name
        });
    });
});




