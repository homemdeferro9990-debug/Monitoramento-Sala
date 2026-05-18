const url =
"https://opensheet.elk.sh/1zpkk971HTSDc9QPBw6GJSGmD8LWrpLo9uHOMsyqEkpc/P%C3%A1gina1";

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

            const horario =
            ultimo["Status e Data"];

            const movimento =
            ultimo["Movimentos"];

            document.getElementById("status").innerText =
            movimento;

            document.getElementById("horario").innerText =
            "Horário: " + horario;

        }else{

            document.getElementById("status").innerText =
            "Sem dados";

        }

    }catch(erro){

        console.log(erro);

        document.getElementById("status").innerText =
        "Erro ao carregar";

    }

}

atualizarDados();

setInterval(atualizarDados,1000);
