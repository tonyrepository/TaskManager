$(document).ready(
    () => {
        $.ajax({
            url: "php/selectAll.php",
            async: true,
            dataType: "json",
            data: {nocache: Math.random()},
            success: function (data) {
                console.log(data);
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