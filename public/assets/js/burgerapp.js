var burger = require(".././models/burger.js");



$(function() {
    $("btn.btn-danger.change-devoured").on("click", function (event) {
        var id = this.data("id");
        var devoured = this.data("devoured");

        var newDevState = {
            devouredState: devoured
        };

        //PUT call
        $.ajax({
            type: "PUT",
            data: newDevState, 
            url: "/api/newburg/"+id,
            
        }).then(
            function(data) {
                console.log("changed Devoured state to: ", data);

                location.reload();

            }
        );

    });

});

function () {
    $("#newburg").on("submit", function (event) {
        event.preventDefault();

        var newBurg = {
            burger_name: $("#bg").val().trim(),
            devoured: $("[name=devoured:checked").val().trim()
        };

        $.ajax( {
            type: "POST",
            data: JSON.stringify(newBurg),
            url: "/api/newburg",
            contentType: "application/json"
        }).then(function(data) {

            console.log("created new burger"+data);
            location.reload();
        })
    });



}