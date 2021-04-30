$(document).ready(function(){
    // Navbar icon actions
        $("#create-chat-button").(click(function (){
            console.log("create chat");
            $("create-chat-menu").removeClass("hidden").addClass("show");
        });
});
