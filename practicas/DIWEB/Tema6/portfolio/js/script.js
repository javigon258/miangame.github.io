$(function () {
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let bandera = false;
    /**
     * Animación barras de habilidad
     */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400 && !bandera) {
            $(".barra").each(function () {
                let porcentaje = parseInt($(this).html());
                if (porcentaje > 0) {
                    $(this).animate({
                        'width': '' + porcentaje + '%'
                    }, 2000);
                    bandera = true;
                } else {
                    $(this).css({
                        'color': 'black',
                        'background': 'none'
                    }, 800);
                }
            })
        }

    });


    /**
     * Mostrar Texto Aside
     */
    $("#btnAsideInicio").hover(function () {
        $("#textoInicio").css("visibility", "visible")
    }, function () {
        $("#textoInicio").css("visibility", "hidden")
    }
    );

    $("#btnAsideSobre").hover(function () {
        $("#textoSobre").css("visibility", "visible")
    }, function () {
        $("#textoSobre").css("visibility", "hidden")
    }
    );

    $("#btnAsideSkills").hover(function () {
        $("#textoSkills").css("visibility", "visible")
    }, function () {
        $("#textoSkills").css("visibility", "hidden")
    }
    );

    $("#btnAsideProyectos").hover(function () {
        $("#textoProyectos").css("visibility", "visible")
    }, function () {
        $("#textoProyectos").css("visibility", "hidden")
    }
    );

    /**
     * Funcionalidad desplazamiento página
     */
    $("#btnAsideInicio").click(function () {
        $('html, body').animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });

    $("#btnAsideSobre").click(function () {
        $('html, body').animate({
            scrollTop: $("#sobreMi").offset().top
        }, 1000);
    });

    $("#btnAsideSkills").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });

    $("#btnAsideProyectos").click(function () {
        $('html, body').animate({
            scrollTop: $("#proyectos").offset().top
        }, 1000);
    });

    /**
     * Mostrar año actual
     */
    $("#fecha").html(anioActual);

});