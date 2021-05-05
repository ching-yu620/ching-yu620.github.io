var personal_ID;
var chatroom_ID;
var friend_ID;
var friend_list=[];
var friend_list_ID;
var mission_list;
var header_pic,group_name,first_line;
var friend_header,friend_name;
var mission_name;
var output_mission=[];
var output_friend=[];
var person_header,person_name;
var your_message;
var rooms_data;
var searched_friend_name,searched_mission_name;


var room_magnitude=5;
var friend_magnitude=8;
var mission_magnitude=5;
var myname="鄭青宇";
  
    var message=[
      {name:"鄭青宇",msg:"jiooooooooooooooooooooooooooo",time:"06:48",image:"../resources/nav/create_chat.png"},
      {name:"莊小萱",msg:"weffffffffffffffffffffffffefw",time:"07:48",image:"../resources/nav/create_chat.png"},
      {name:"鄭青宇",msg:"jiooooooooooooooooooooooooooo",time:"06:48",image:"../resources/nav/create_chat.png"},
      {name:"莊小萱",msg:"weffffffffffffffffffffffffefw",time:"07:48",image:"../resources/nav/create_chat.png"},
      {name:"鄭青宇",msg:"jiooooooooooooooooooooooooooo",time:"06:48",image:"../resources/nav/create_chat.png"},
      {name:"莊小萱",msg:"weffffffffffffffffffffffffefw",time:"07:48",image:"../resources/nav/create_chat.png"},
      {name:"鄭青宇",msg:"jiooooooooooooooooooooooooooo",time:"06:48",image:"../resources/nav/create_chat.png"},
      {name:"莊小萱",msg:"weffffffffffffffffffffffffefw",time:"07:48",image:"../resources/nav/create_chat.png"},
      {name:"鄭青宇",msg:"jiooooooooooooooooooooooooooo",time:"06:48",image:"../resources/nav/create_chat.png"},
      {name:"莊小萱",msg:"weffffffffffffffffffffffffefw",time:"07:48",image:"../resources/nav/create_chat.png"},
      {name:"鄭青宇",msg:"jiooooooooooooooooooooooooooo",time:"06:48",image:"../resources/nav/create_chat.png"},
      {name:"莊小萱",msg:"weffffffffffffffffffffffffefw",time:"07:48",image:"../resources/nav/create_chat.png"},
    ];
//some text need to be modified by variable



//chat page
function choose_mission(){
    let obj=document.getElementsByName("choose_mission");
    let len = obj.length;
    $("#chat-choose-missions").removeClass("hidden").addClass("show");
    $(".chat-cover").removeClass("hidden").addClass("show");
    for(let i=len-1;i>=0;i--){
        console.log("stop?");
        if(obj[i].checked==true){
            console.log(i+"missions");
            output_mission.push("任務選項"+i)//mission_list[i]);
            //$("#choosed-mission"+i).removeClass("unchosen").addClass("chosen");
            $(".button-sure").removeClass("hidden").addClass("show");
        }else{
            //$("#choosed-mission"+i).removeClass("chosen").addClass("unchosen");
        }
    }
    
}
function choose_friend(){
    let obj=document.getElementsByName("choose_friend");
    let len = obj.length;
    for(let i=len-1;i>=0;i--){
        console.log(len+"friends");
        if(obj[i].checked==true){
            output_friend.push("friend_list[i]");
            //$("#choosed-friend"+i).removeClass("unchosen").addClass("chosen");
            $(".button-creategroup").removeClass("hidden").addClass("show");
        }else{
            //$("#choosed-friend"+i).removeClass("chosen").addClass("unchosen");
        }
    }
}


function appendrooms(){
    for(let i=0;i<room_magnitude;i++){
        let chatroom="<div id='chat-room-num"+i+"'class='chat-room'><img id='chat-header'src='"+header_pic+"'/><div class='chat-room-text'><h3 id='chat-group-name'>"+group_name+"</h3><h4 id='chat-firstline>"+first_line+"</h4></div></div>";
        $("#chat-record").append(chatroom)
    }
}
function appendmissions(){
    for(let i=0;i<mission_magnitude;i++){
        let missions="<input type='radio' name='choose_mission' id='C_M"+i+"'><label for='C_M"+i+"'><div id='choosed-mission"+i+"'class='choosed-mission unchosen'onclick='choose_mission()'><h3>和陌生的你夜衝</h3></div></label>";
        //let missions="<input type='radio' name='choose_mission' id='C_M"+i+"'><label for='C_M"+i+"'><div id='choosed-mission"+i+"'class='choosed-mission unchosen'onclick='choose_mission()'><h3>mission_list[i].name</h3></div></label>";
        //===============================================================================
        $("#chat-choose-missions").append(missions)
    }
}
function appendfriends(){
    for(let i=0;i<friend_magnitude;i++){
        let friends="<input type='checkbox' name='choose_friend' id='C_F"+i+"'><label for='C_F"+i+"'><div id='choosed-friend"+i+"'class='choosed-friend unchosen'><img src='../resources/nav/create_chat.png'/><h3>鄭青宇</h3></div>";
        //let friends="<input type='checkbox' name='choose_friend' id='C_F"+i+"'><label for='C_F"+i+"'><div id='choosed-friend"+i+"'class='"+friend_list[i].image+"'/><h3>"+friend_list[i].name+"</h3></div>";
        //================================================================================
        $("#chat-choose-friends").append(friends)
    }
}
function newgroup(){
    $.post('./newgroup', {//****************************************************************
        output_mission,//選擇的任務
        output_friend//選擇的好友
    } ,
    function(data){
        data == "Success" //just return data==true,and create a new group
    });
}

function findmission(name){
   // let name=$('#group-choose-mission input[name=missiontosearch]').val();
    console.log(name);
    for(let i=0;i<mission_magnitude;i++){
        $("#choosed-mission"+i).addClass("gone");
    }
    for(let i=0;i<mission_magnitude;i++){
        /*if(mission_list[i].name==name){
            $("#choosed_mission"+i).removeClass("hidden").addClass("show");//=======================================

            break;
        }else*/ if(name==""){
            $("#choosed-mission"+i).removeClass("gone");
        }
        else{
            //show nothing
            //$("#choosed-mission"+(mission_magnitude-1)).removeClass("gone")
        }
    }
}
function findfriend(name){

    console.log(name);
    for(let i=0;i<friend_magnitude;i++){
         $("#choosed-friend"+i).addClass("gone");
    }
    for(let i=0;i<friend_magnitude;i++){
        /*if(friend_list[i].name==name){
            $("#choosed_friend"+i).removeClass("hidden").addClass("show");//========================================
        }else*/ if(name==""){
            $("#choosed-friend"+i).removeClass("gone");
        }    
        else{
            //$("#choosed-friend"+(friend_magnitude-1)).removeClass("gone")
            //show nothing
        }
    }
}

function sendmessage_friend(){
     $.post('./sendmessage_friend', {//****************************************************************
        friend_ID, // 要傳跟誰說話
        your_message
    } ,
    function(data){
        data[1].name // 1可以換成2,3,4....
        data[1].msg
        data[1].time
        data[1].image
    });
}
function sendmessage_mission(){
    $.post('./sendmessage_mission', {//****************************************************************
        chatroom_name, // 要傳聊天室的名字
        your_message
   } ,
   function(data){
        data[1].name // 1可以換成2,3,4....
        data[1].msg
        data[1].time
        data[1].image
   });
}
//getmessage(){}    use this or websocket


//chat page

//get rooms
$("#chat-record").ready(function(){//get all chatroom record
    
     $.post('./chatrecord', 
    function(chatrooms){
         room_magnitude=chatrooms.length;
         for(var i=0;i<chatrooms.length;i++){
            rooms_data[i].header_pic=chatrooms[i].image
            rooms_data[i].group_name=chatrooms[i].name
            rooms_data[i].first_line=chatrooms[i].msg
            rooms_data[i].time=chatrooms[i].time
         }

    });
    header_pic="../resources/nav/create_chat.png";//for test
    group_name="鄭青宇";//for test
    first_Line="哈哈哈哈";//for test
    
    appendrooms();//write into html
    

});
$("#chat-choose-missions").ready(function(){
    $.post('./mission/done', 
    function(data){
        //data[0].name, data[0].category //0可以換成其他數字,有哪些屬性可以去看mission.db的column name
        mission_magnitude=data.length;
        mission_list=data;
    });
    appendmissions();
});
$("#chat-choose-friends").ready(function(){
    $.post('./friendrecord', 
    function(friends){
        //friend_list[i]=friends[i];某人擁有的所有朋友的data
        //header_pic=?
        //friend_name=?
        //friend_ID=?
        
        //friends.friend[0]; // 0可以換成其他數字，目前只會回傳id
        friend_magnitde=friends.friend.length;
        friend_list_ID=friends.friend;             
    });
    /*for(let i=0;i<friend_list_ID;i++){//========================================================================================
        $.post('./findperson', {//****************************************************************
            person_ID
        } ,
        function(data){
            //data.name, data.title, data.id, data.intro, data.image, data.social, data.travel, data.food, data.activity, data.sport, data.self;
            friend_list.push(data);
        });
    }*/

    appendfriends();
});
;


//friend page
function appendfriendsformenu(){
    
    for(var i=0;i<friend_magnitude;i++){
        let friend="<div class='slideleft'><button class='deletebutton'>删除</button><div id='friend-num"+i+"'class='friend'><img id='friend-header'src='../resources/nav/create_chat.png'/><div class='friend-text'><h3 id='friend-name'>鄭青宇</h3></div></div><s class='space'></s></div>";
        $("#friend-record").append(friend)
    }
}
//friend page
$("#friend-record").ready(function(){
     $.post('./friendrecord', 
    function(friends){
        //friend_list[i]=friends[i];
        //similar to chatchoosefriends, but in different place
        //header_pic=?
        //friend_name=?
        //friend_nickname?
        //friend_ID?
        friends.friend[0] // 0可以換成其他數字，目前只會回傳id
    });
    console.log("friend");
    appendfriendsformenu();


});    
$(".friend").on('swiperight', function(event) {
     event.preventDefault();
     $(".deletebutton").removeClass("gone");
});
function findperson(person_ID){//find a unknown person with ID
    console.log(person_ID);

    $.post('./findperson', {//****************************************************************
        person_ID
    } ,
    function(data){
        //data.name, data.title, data.id, data.intro, data.image, data.social, data.travel, data.food, data.activity, data.sport, data.self;
        if(data){
            //$("#addfriend").removeClass("hidden").addclass("show");
            //document.getElementById("addfriend_pic").src=data.image;
            //document.getElementById("addfriend_name").innerHTML=data.name;
        }
    });
    $("#addfriend").removeClass("hidden").addClass("show");
    $(".friend-cover").removeClass("hidden").addClass("show");
    document.getElementById("addfriend_pic").src="../resources/nav/create_chat.png";
    document.getElementById("addfriend_name").innerHTML="鄭青宇";
}
function addfriend(){//add friend
    $.post('./addfriend', {//****************************************************************
        person_ID,//他人ID
    } ,
    function(data){
        data == "Success" //return data==true
        //refresh friend-record
    });
}

function deletefriend(){//delete friend
    $.post('./deletefriend', {//****************************************************************
        person_ID,//他人ID
    } ,
           
    function(data){
        data == "Success" //return data==true
        //refresh friend-record
    });
}

//mypage page
$("#mypage-record").ready(function(){
     $.post('./mypage-record',
    function(data){
        //many different data,whatever the data structure
        data.name, data.title, personal_ID=data.id, data.intro, data.image, data.social, data.travel, data.food, data.activity, data.sport, data.self
    });
   

});
//room page
function handle_message(){
      console.log("print");
      for(let i=0;i<message.length;i++){
      let mymessage="<div class='my-message'><div class='message-time'>"+message[i].time+"</div><div class='what-i-say'>"+message[i].msg+"</div></div>";
      let yourmessage= "<div class='your-message'><div class='message-pic'><img class='your-header'src='"+message[i].image+"'><div class='your-name'>"+message[i].name+"</div></div><div class='what-you-say'>"+message[i].msg+"</div><div class='message-time'>"+message[i].time+"</div></div>";
        if(message[i].name==myname){
          $('#chat-content').append(mymessage);
        }else{
          $('#chat-content').append(yourmessage);
        }
      }
    }
$("#room-main").ready(function(){
    console.log("start");
      handle_message();
    });
//functions which is click
$(document).ready(function(){
    $("#room-main").removeClass("hidden").addClass("show");
    handle_message();
    
    
    $("#create-chat-button").click(function (){
        console.log("create chat");
        $("#chat-choose-missions").removeClass("hidden").addClass("show");
        $(".chat-cover").removeClass("hidden").addClass("show");
    });
    $(".chat-room").click(function (){//go into a chatroom by chatroom record
        document.getElementById("chat-room-name").innerHTML = "阿元";
        $.post('./chatroom_friend', {//****************************************************************
            friend_ID
        } ,
        function(data){
            //from recent to past
            //need who send the message(message.ID.name.header)
            data[1].name // 1可以換成2,3,4....
            data[1].msg
            data[1].time
            data[1].image
        });
        $.post('./chatroom_mission', {//****************************************************************
            chatroom_name
        } ,
        function(data){
            //from recent to past
            //need who send the message(message.ID.name.header)
            data[1].name // 1可以換成2,3,4....
            data[1].msg
            data[1].time
            data[1].image
        });
        console.log("create room");
        $("#chat-main").removeClass("show").addClass("hidden");
        $("#room-main").removeClass("hidden").addClass("show");
        
        
    });
    
    for(let i=0;i<friend_magnitude;i++){
     $("#choosed-mission"+i).click(function (){
      if ($("#choosed-mission"+i).hasClass('unchosen')){
       $("#choosed-mission"+i).removeClass("unchosen").addClass("chosen");
          //for(let j=0;j<friend_magnitude;j++){
          //if(j!=i){
           // $("#choosed-mission"+j).removeClass("chosen").addClass("unchosen");
          //}
          //}
       }
        
       });
    }
    
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
    $('#group-choose-mission button[type="submit"]').click((event) => {
        event.preventDefault();
        let name=$('#group-choose-mission input[name=missiontosearch]').val();
        findmission(name);
    });
    $('#group-choose-friend button[type="submit"]').click((event) => {
        event.preventDefault();
        let name=$('#group-choose-friend input[name=friendtosearch]').val();
        findfriend(name);
    });
    
    
    //friend page
    $(".single-friend").click(function (){//go into chatroom by friend page
       $.post('./singlefriend', {//****************************************************************
            friend_ID
        } ,
        function(data){//get the chatroom_ID of you and the friend
            //chatroom_ID=ID
            data == "Success"
        });
        document.getElementById("chat-room-name").innerHTML = "";//??
        $.post('./chatroom_friend', {//as same as the above one//****************************************************************
            friend_ID
        } ,
        function(data){
            //from recent to past
            //need who send the message(ID,name,header)
            data[1].name // 1可以換成2,3,4....
            data[1].msg
            data[1].time
            data[1].image
        });
    });
    $('#ID-choose-friend button[type="submit"]').click((event) => {
        event.preventDefault();
        console.log("addfriend");
        let ID=$('#ID-choose-friend input[name=persontosearch]').val();
        findperson(ID);
    });
});




