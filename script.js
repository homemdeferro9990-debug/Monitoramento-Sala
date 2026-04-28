const firebaseConfig = {
  apiKey: "AIzaSyB8R_giZvIictpa3pU2CJLS8GGSenIu51A",
  authDomain: "monitoramento-sala-1c356.firebaseapp.com",
  databaseURL: "https://monitoramento-sala-1c356-default-rtdb.firebaseio.com",
  projectId: "monitoramento-sala-1c356",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

db.ref("sala").on("value", (snapshot) => {
  const data = snapshot.val();

  if (!data) {
    document.getElementById("status").innerText = "Sem dados";
    return;
  }

  document.getElementById("status").innerText =
    data.ocupado ? "🔴 Sala Ocupada" : "🟢 Sala Livre";

  document.getElementById("atividade").innerText =
    data.ultima;

  document.getElementById("tempo").innerText =
    data.tempo + " min";
});
