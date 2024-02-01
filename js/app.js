$(document).ready(
    () => {
        $.ajax({
            type: "GET",
            url: "php/selectAll.php",
            async: true,
            dataType: "json",
            data: {nocache: Math.random()},
            success: function (data) {
                console.log(data[0].id);
            },
            error: () => {
                console.log("error");
            }
        });

        $("#saveTask").click(() => {
            let taskName = $("#taskName").val();
            let taskDesc = $("#taskDesk").val();


        });

    }
);