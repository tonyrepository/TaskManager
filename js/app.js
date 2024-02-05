$(document).ready(
    () => {
        refresh()

        $("#searchBar").keyup(() => {
            refresh($("#searchBar").val())
        })
        
        $("#saveTask").click(() => {
            insert()
        })

        $("body").click((e) => {
            if($(e.target).attr("mod")) {
                modify()
            } else if($(e.target).attr("del")) {
                remove()
            }
        })
    }
);

function insert() {
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
}

function modify() {
    $.ajax({
        url: "php/modify.php",
        async: true,
        dataType: "text",
        data: {id: $(e.target).attr("del"), nocache: Math.random()},
        success: () => {
            refresh()
        },
        error: () => {
            console.log("error")
        }
    })
}

function remove() {
    $.ajax({
        url: "php/delete.php",
        async: true,
        dataType: "text",
        data: {id: $(e.target).attr("del"), nocache: Math.random()},
        success: () => {
            refresh()
        },
        error: () => {
            console.log("error")
        }
    })
}

function refresh(values = "") {
    $.ajax({
        type: "GET",
        url: "php/selectAll.php",
        async: true,
        dataType: "json",
        data: {filter: values, nocache: Math.random()},
        success: function (data) {
            if(data.length > 0) {
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
                                "<div id='settings'>" +
                                "<input type='button' mod='" + element["id"] + "' value='Modificar'>" + 
                                "<input  type='button' del='" + element["id"] + "' value='Borrar'>" +
                                "</div>" +
                            "</td>" +
                        "</tr>"
                    )
                })
                $("#result table").append(
                    "</table>"
                )
            }
        },
        error: () => {
            console.log("error");
        }
    });
}