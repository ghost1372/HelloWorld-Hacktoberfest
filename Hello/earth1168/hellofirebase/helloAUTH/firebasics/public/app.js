document.addEventListener("DOMContentLoader", event => {
    
    const app = firebase.app();
   
    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firstspot');

    myPost.onSnapshot(doc => {
        const data = doc.data();
        document.write(data.title + '<br>')
        document.write(datt.createdAt)
        
    })
        
});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write('Hello ${user.displayName}');
            console.log(user)
        })
        .catch(console.log)

}

function updatePost(e) {
    const db = firebase.firestore();
    const myPost = db.collection('post').doc('firstpost');
    myPost.update({ title: e.target.value})
}

