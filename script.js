const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

db.ref("sala").on("value", (snapshot) => {
  const data = snapshot.val();

  if (!data) return;

  document.getElementById("status").innerText =
    data.ocupado ? "🔴 Sala Ocupada" : "🟢 Sala Livre";
});
