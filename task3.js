var res=fetch("https://jsonplaceholder.typicode.com/users");
res.then((data)=>data.json()).then((value)=>bar(value))



var cantainer=document.createElement("div");
cantainer.className="cantainer"
var h1=document.createElement('h1');
h1.innerHTML="user details";
var row=document.createElement("div");
row.className="row"
var h1=document.createElement("div");
h1.className="h1"
// var col=document.createElement("cpl-md-3");
// col.className="col"
// row.append(col);
document.bady.append(row)

function bar(value){
    console.log(value);
    for(var i=0;i<value.length;i++){
     
        row.innerHTML+=`<div class="card text-white bg-primary mb-3" style="max-width: 28rem";>
        <h6>Name : ${value[i].name}</h6>
        <div class="card-body" style="color:yellow";>
          <p class="card-title">Email : ${value[i].email}</p>
          <p class="card-text"> Street :${value[i].street}</p>
          <p class="card-tex">City : ${value[i].city}</p>
        
        </div>
      </div>`
    }
    document.body.append(row);
}