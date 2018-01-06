

var burger = require(".././models/burger.js");


function () {

    $("btn-danger").on("click", function (event) {
        var id = event.data(id);
        var devoured = event.target.devoured;
        
        var newDevState = {
            devouredState: devoured
        };

        console.log(event);
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
}

function subBurg() {
    document.getElementById("submitBurg").on("click", function (event) {
        console.log(event.val());

        event.preventDefault();
   
        // var newBurg = {
        //     burger_name: req.params.burger_name,
        //     devoured: $("[name=devoured:checked").val().trim()
        // };

        console.log($("#bg").val());

        $.ajax( {
            type: "POST",
            data: req.params, // JSON.stringify(newBurg),
            url: "/api/newburg",
            contentType: "application/json"
        }).then(function(result) {

            console.log("created new burger"+ result);
            location.reload();
        })
    });
}

