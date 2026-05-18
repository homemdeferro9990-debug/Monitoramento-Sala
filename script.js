const url =
"https://opensheet.elk.sh/1zpkk971HTSDc9QPBw6GJSGmD8LWrpLo9uHOMsyqEkpc/P%C3%A1gina1";

let ultimoHorario = "";

async function atualizarDados(){

    try{

        const resposta =
        await fetch(url + "?t=" + Date.now());

        const dados =
        await resposta.json();

        console.log(dados);

        if(dados.length > 0){

            const ultimo =
            dados[dados.length - 1];

            // pega os nomes reais das colunas
            const horario =
            ultimo["Status e Data"];

            const movimento =
            ultimo["Movimentos "];

            if(horario !== ultimoHorario){

                ultimoHorario = horario;

                document.getElementById("status").innerText =
                movimento;

                document.getElementById("horario").innerText =
                "Horário: " + horario;

                document.querySelector(".status-box").style.transform =
                "scale(1.03)";

                setTimeout(() => {

                    document.querySelector(".status-box").style.transform =
                    "scale(1)";

                },200);

            }

        }

    }catch(erro){

        console.log(erro);

        document.getElementById("status").innerText =
        "Erro ao carregar";

    }

}

atualizarDados();

setInterval(atualizarDados,1000);
