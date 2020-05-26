

var db=firebase.firestore();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      
      

      var docRef = db.collection("Customers").doc(email);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
      document.getElementById("name").innerHTML=doc.data().Name;
      document.getElementById("companyName").innerHTML=doc.data().companyName;
      document.getElementById("custEmail").innerHTML=doc.data().custEmail;
      document.getElementById("agreementurl").innerHTML="<a href="+doc.data().url+">Click here to view agreement</a>";
      document.getElementById("mobileNo").innerHTML=doc.data().mobileNo;

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


      
      // ...
    } else {
      // User is signed out.
      // ...
      document.getElementById("Email").innerHTML="Not Logged in";

    }
  });

