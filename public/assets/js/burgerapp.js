$(function() {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevState = {
            devouredState: devoured
        };

        //PUT call
        $.ajax("/api/newburg/"+id, {
            type: "PUT",
            data: newDevState
        }).then(
            function() {
                console.log("changed Devoured state to: ", newDevState);

                location.reload();

            }
        );

    });

    $("#submit").on("submit", function (event) {
        event.preventDefault();

        var newBurg = {
            name: 
            deva
        }
    });



})