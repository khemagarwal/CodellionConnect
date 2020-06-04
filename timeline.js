

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

    
    

    var docRef = db.collection("Timeline").doc(email);

docRef.get().then(function(doc) {
  if (doc.exists) {
      console.log("Document dataddd:", doc.data());
  

    document.getElementById("Idea").innerHTML=doc.data().Idea;
    document.getElementById("Planning").innerHTML=doc.data().Planning;
    document.getElementById("Development").innerHTML=doc.data().Development;
    document.getElementById("Testing").innerHTML=doc.data().Testing;
    document.getElementById("Deployment").innerHTML=doc.data().Deployment;
    document.getElementById("Services").innerHTML=doc.data().Services;

    if(doc.data().CurrentStage == "Idea")
    {
        document.getElementById("currentstageidea").innerHTML="CURRENTLY AT THIS STAGE";
    }
    else if(doc.data().CurrentStage == "Planning")
    {
        document.getElementById("currentstageplanning").innerHTML="CURRENTLY AT THIS STAGE";
    }
    else if(doc.data().CurrentStage == "Development")
    {
        document.getElementById("currentstagedevelopment").innerHTML="CURRENTLY AT THIS STAGE";
    }
    else if(doc.data().CurrentStage == "Testing")
    {
        document.getElementById("currentstagetesting").innerHTML="CURRENTLY AT THIS STAGE";
    }
    else if(doc.data().CurrentStage == "Deployment")
    {
        document.getElementById("currentstagedeployment").innerHTML="CURRENTLY AT THIS STAGE";
    }
    else if(doc.data().CurrentStage == "Services")
    {
        document.getElementById("currentstageservices").innerHTML="CURRENTLY AT THIS STAGE";
    }


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

