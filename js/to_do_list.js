document.getElementById("btnadd").addEventListener("click",add);
function add(){
    var task = document.getElementById("ctn").textContent.trim();
    if (task!=""){
        document.getElementById("ulg").innerHTML+='<div><li class="list-group-item"><span>'+task+' </span><div class="col-sm-2 offset-10 icon"><i class="fas fa-trash" title="remove"></i><i class="fas fa-user-edit" title="Edit"></i></div></li></div>'
        document.getElementById("ctn").textContent="";
    }else{
        alert("task not available")
    }

}


document.getElementById("search").addEventListener("keyup",search);
function search(){
    var key =this.value;
    
    for(var i=0 ; lists.length;i++){
        lists[i].children[0].textContent.trim().toUpperCase();
        if(!lists[i].children[0].textContent.trim().includes(key)){
            lists[i].style.display="none";

        }else{
            lists[i].style.display="block";
        }

    }
}




var trash = document.getElementsByClassName("fa-trash");
for(var i=0;i<trash.length;i++){
    trash[i].addEventListener("click",remove)
}
var lists = document.getElementsByTagName("li");
for(var i=0;i<lists.length;i++){
    lists[i].children[0].addEventListener("click",edit);
    
}
function remove(){
    var conf = confirm("Are you sure ?");
    if (conf)
    this.parentElement.parentElement.remove();
    }
    function edit(){
        this.setAttribute("contenteditable","");
        }
    