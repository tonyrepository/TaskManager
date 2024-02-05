$(document).ready(
    () => {
        refresh()

        $("#searchBar").keyup(() => {
            refresh($("#searchBar").val())
        })
        $("#saveTask").click(() => {
            console.log(taskName + taskDesc)
            if(taskName != "") {
                $.ajax({
                    url: "php/insert.php",
                    async: true,
                    dataType: "text",
                    data: {nomTask: $("#taskName").val(), descTask: $("#taskDesc").val(), nocache: Math.random()},
                    success: () => {
                        refresh()
                    },
                    error: () => {
                        console.log("error")
                    }
                })
            }
            $("#taskName").val("")
            $("#taskDesc").val("")
        })

    }
);

function refresh(selector = "") {
    $.ajax({
        type: "GET",
        url: "php/selectAll.php",
        async: true,
        dataType: "json",
        data: {filter: values, nocache: Math.random()},
        success: function (data) {
            $("#result").empty()
            $("#result").append(
                "<table>" +
                    "<tr>" +
                        "<th>" +
                            "Título" +
                        "</th>" +
                        "<th>" +
                            "Descripción" +
                        "</th>" +
                    "</tr>"
            )
            data.forEach((element) => {
                $("#result table").append(
                    "<tr>" +
                        "<td>" +
                            element["Nombre"] +
                        "</td>" +
                        "<td>" +
                            element["Descripcion"] +
                            "<div id='" + element["id"] + "'>Modificar</div>" + 
                            "<div id='" + element["id"] + "'>Borrar</div>" +
                        "</td>" +
                    "</tr>"
                )
            })
            $("#result table").append(
                "</table>"
            )
        },
        error: () => {
            console.log("error");
        }
    });
}