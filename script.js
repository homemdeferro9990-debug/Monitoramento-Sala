const url =
"https://opensheet.elk.sh/1zpkk971HTSDc9QPBw6GJSGmD8LWrpLo9uHOMsyqEkpc/P%C3%A1gina1";

let ultimoHorario = "";

async function atualizarDados(){

    try{

        const resposta =
        await fetch(url + "?t=" + Date.now());

        const dados =
        await resposta.json();

        if(dados.length > 0){

            const ultimo =
            dados[dados.length - 1];

            const horarioNovo =
            ultimo["Status e Data"];

            if(horarioNovo !== ultimoHorario){

                ultimoHorario = horarioNovo;

                document.getElementById("status").innerText =
                ultimo["Movimentos "];

                document.getElementById("horario").innerText =
                "Horário: " + horarioNovo;

                document.querySelector(".card").style.transform =
                "scale(1.02)";

                setTimeout(() => {

                    document.querySelector(".card").style.transform =
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
