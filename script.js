// CONFIGURE COM OS DADOS DO FIREBASE
var firebaseConfig = {
  apiKey: "SUA_API_KEY",
  databaseURL: "SUA_DATABASE_URL"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// ESCUTA MUDANÇAS EM TEMPO REAL
db.ref("sala").on("value", (snapshot) => {
  let dados = snapshot.val();

  if (!dados) return;

  let status = dados.status;
  let atividade = dados.ultima_atividade;
  let tempo = dados.tempo_sem_movimento;

  let statusDiv = document.getElementById("status");

  statusDiv.innerText = status.toUpperCase();

  if (status === "ocupado") {
    statusDiv.className = "status ocupado";
  } else {
    statusDiv.className = "status livre";
  }

  document.getElementById("atividade").innerText = atividade;
  document.getElementById("tempo").innerText = tempo + " min";
});
