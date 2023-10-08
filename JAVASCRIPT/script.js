$(document).ready(function () {
    // Handle the dropdown toggle
    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").toggle();
    });

    // Close the dropdown if the user clicks outside of it
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown-menu").hide();
        }
    });
});