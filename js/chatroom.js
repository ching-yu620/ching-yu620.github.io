$(document).ready(() => {
    // Navbar icon actions
    for (let i = 0; i < 5; ++i) {
        $("#create-chat-button").on("click", () => {
            console.log("create chat");
            $("create-chat-menu").removeClass("hidden").addClass("show");
        });
    }
});
