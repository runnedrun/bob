var firebaseConfig = {
  apiKey: "AIzaSyB4n3T-wB2G2UnIrMUU3hC7SqoXhPEb4L0",
  authDomain: "classadoo-dev.firebaseapp.com",
  databaseURL: "https://classadoo-dev.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge-2")

function addListItem(name, value) {		
  store.child("vars" + "/" + name).push(value)
}

function onNewListItem(name, callback) {		
  store.child("vars" + "/" + name).on("child_added", function(data) {
    callback(data.val())
  })
}

function storeValue(name, value) {	
  var obj = {}
  obj[name] = value;
  store.child("vars").update(obj)
}

function onNewValue(name, callback) {	
  store.child("vars").child(name).on("value", function(data) {		
    {
      -kajskldfkjlkasjdflkj: "David",
      -2j3ljalskjdflkjaslkdfj: "jack"
    }
    
    {
      name: "David",
        profession: "coder"
    }
    
    
    callback(data.val());
  })
}