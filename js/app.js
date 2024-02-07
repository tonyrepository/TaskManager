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
                modify(e.target)
            } else if($(e.target).attr("del")) {
                remove(e.target)
            }
        })
    }
);

function insert() {
    console.log("asda")
    if(taskName != "") {
        $.ajax({
            url: "php/insert.php",
            async: true,
            dataType: "text",
            data: {nomTask: $("#taskName").val(), descTask: $("#taskDesc").val(), nocache: Math.random()},
            success: (e) => {
                if (e != "") {
                    console.warn(e)
                    window.alert(e)
                }
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

function modify(object) {
    $.ajax({
        url: "php/selectById.php",
        async: true,
        dataType: "json",
        data: {id: $(object).attr("mod"), nocache: Math.random()},
        success: function (data) {
            $("#taskName").val(data.Nombre)
            $("#taskDesc").val(data.Descripcion)
            
            $("#tarea input[type='button']").remove()
            $("#tarea").append('<input type="button" id="update" value="Modificar tarea">')
            
            $("#update").click(() => {
                $.ajax({
                    url: "php/update.php",
                    async: true,
                    dataType: "text",
                    data: {
                        id: $(object).attr("mod"),
                        nomTask: $("#taskName").val(), 
                        descTask: $("#taskDesc").val(), 
                        nocache: Math.random()
                    },
                    success: () => {
                        refresh()

                        $("#tarea input[type='button']").remove()
                        $("#tarea").append('<input type="button" id="saveTask" value="Guardar tarea">')

                        $("#taskName").val("")
                        $("#taskDesc").val("")

                        $("#saveTask").click(() => {
                            insert()
                        })
                    },
                    error: () => {
                        console.log("error")
                    }
                })
            })
        },
        error: () => {
            console.log("error")
        }
    })
}

function remove(object) {
    $.ajax({
        url: "php/delete.php",
        async: true,
        dataType: "text",
        data: {id: $(object).attr("del"), nocache: Math.random()},
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
            $("#result").html("")
            if(data.length > 0) {
                $("#result").append(
                    "<table>" +
                        "<tr>" +
                            "<th>" +
                                "Título" +
                            "</th>" +
                            "<th colspan='2'>" +
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
                            "</td>" +
                            "<td id='settings'>" +
                                "<input type='button' id='mod' mod='" + element["id"] + "' value='Modificar'>" + 
                                "<input  type='button' id='del' del='" + element["id"] + "' value='Borrar'>" +
                            "</td>" +
                        "</tr>"
                    )
                })
                $("#result table").append(
                    "</table>"
                )
            } else {
                $("#result").append("<strong>no data</strong>")
            }
        },
        error: () => {
            console.log("error");
        }
    });
}