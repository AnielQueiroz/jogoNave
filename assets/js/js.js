function start(){
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    var jogo = {};
    var tecla = {
        W: 38,
        S: 40,
        D: 68
    };

    jogo.pressionou = [];

    //verifica se o usuario pressionou alguma tecla
    $(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });

    /**Game loop */

    jogo.timer = setInterval(loop, 30);

    function loop(){
        movefundo();
        movejogador();
    }   //fim da funcao loop


    //funcao que movimenta o fundo do jogo

    function movefundo(){
        esquerda = parseInt($("#fundoGame").css("background-position"));
    
        $("#fundoGame").css("background-position", esquerda-1);
    }   //fim da funcao movefundo()

    function movejogador(){
        if (jogo.pressionou[tecla.W]){
            var topo = parseInt($("#jogador").css("top"));

            $("#jogador").css("top", topo-10);
        }

        if (jogo.pressionou[tecla.S]){
            var topo = parseInt($("#jogador").css("top"));

            $("#jogador").css("top", topo+10);
        }

        if (jogo.pressionou[tecla.D]){
            //chama a funcao disparo
        }
    }//fim da funcao movejogador()
}

