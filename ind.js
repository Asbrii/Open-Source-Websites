var firebaseConfig = {
    apiKey: "AIzaSyAzmikewvG1aV7wvCLonvrJR7pjves8A1E",
    authDomain: "vedha-trust.firebaseapp.com",
    projectId: "vedha-trust",
    storageBucket: "vedha-trust.appspot.com",
    messagingSenderId: "217687360145",
    appId: "1:217687360145:web:82d99d4dadc9ea57b8b530",
    measurementId: "G-J5H5SDB3K1"
  };
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

  function signup(){
    console.log("inside sign up ");
    var email = document.getElementById("email");
    var pwd = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value , pwd.value);
    promise.catch(e=>alert(e.message));
    alert ("register !!!")
}
   function indexer() {
    window.Location.replace("index.html")
   }

  function singin(){
    console.log("inside sign in ");
    var email = document.getElementById("email");
    var pwd = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, pwd.value);
    promise.catch(e=>alert(e.message));
    alert("logged!");
    window.location.replace("home.html");

  }

  function signout()
   {
    console.log("go to index")
    alert("sign out !!!!!")
    window.location.replace("index.html");
  }
    
  
//   function sigOut() 
//   {
//     alert("GO OUT KNOW")
//   }