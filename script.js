// CONFIG DO FIREBASE (já coloquei a sua)
const firebaseConfig = {
  apiKey: "AIzaSyB8R_gizVictpa3pU2CJL8SGSGenIu51A",
  authDomain: "monitoramento-sala-1c356.firebaseapp.com",
  databaseURL: "https://monitoramento-sala-1c356-default-rtdb.firebaseio.com",
  projectId: "monitoramento-sala-1c356"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Escuta dados em tempo real
db.ref("sala").on("value", (snapshot) => {
  const data = snapshot.val();

  const statusDiv = document.getElementById("status");

  if (!data) {
    statusDiv.innerText = "Sem dados";
    return;
  }

  // STATUS
  if (data.status === "ocupado") {
    statusDiv.innerText = "🔴 Sala Ocupada";
    statusDiv.className = "status ocupado";
  } else {
    statusDiv.innerText = "🟢 Sala Livre";
    statusDiv.className = "status livre";
  }

  // OUTRAS INFOS
  document.getElementById("atividade").innerText =
    data.ultima_atividade || "--";

  document.getElementById("tempo").innerText =
    (data.tempo_sem_movimento || 0) + " min";
});
