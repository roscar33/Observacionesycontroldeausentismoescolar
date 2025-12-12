importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB2MJ-jdwQeT6sOfZ21tCrFYzGiuTNOAJ8",
  authDomain: "diariodeprocesos-6f78d.firebaseapp.com",
  projectId: "diariodeprocesos-6f78d",
  messagingSenderId: "487922338632",
  appId: "1:487922338632:web:47fc48c23dbea064b0817d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || "Nueva observación";
  const body  = payload?.notification?.body  || "Tienes una nueva observación registrada.";

  self.registration.showNotification(title, {
    body,
    icon: "/Observacionesycontroldeausentismoescolar/escudo.png"
  });
});
