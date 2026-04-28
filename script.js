// CONFIG FIREBASE (troca pelos seus dados)
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
  projectId: "SEU_PROJETO",
};

// Inicializa
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Lê dados
db.ref("sala").on("value", (snapshot) => {
  const data = snapshot.val();

  if (!data) {
    document.getElementById("status").innerText = "Sem dados";
    return;
  }

  document.getElementById("status").innerText =
    data.ocupado ? "🔴 Sala Ocupada" : "🟢 Sala Livre";

  document.getElementById("status").className =
    data.ocupado ? "status ocupado" : "status livre";

  document.getElementById("atividade").innerText =
    data.ultima;

  document.getElementById("tempo").innerText =
    data.tempo + " min";
});
