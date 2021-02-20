var abc = document.getElementById("title")

console.log(abc.innerText+22)

var newEl = document.createElement("button")
abc.append(newEl)
newEl.innerText = "Test"
var count = 0
newEl.addEventListener("click", function(){
    count ++
    console.log(count)
    if(count<5){
        console.log("yyy")
        abc.style.color = "red"
    } else {
        console.log("eee")
        abc.style.color = "blue"
    }
    
document.getElementById("count").innerText = count

})
