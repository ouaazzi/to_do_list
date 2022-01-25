var trash = document.getElementsByClassName("fa-trash");
for(var i=0;i<trash.length;i++){
    trash[i].addEventListener("click",remove)
}
function remove(){
    var conf = confirm("Are you sure ?");
    if (conf)
    this.parentElement.parentElement.remove();
    }