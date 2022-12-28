const body = document.body
const user_object = document.getElementById("parent_0")

let user_id = 1
let parent_id = 1
let generation_id = 1

function checkInput(obj) {
    if (obj.value === "") {
        obj.value = "Unnamed"
    }

    obj.style.width = (obj.value + "e").length + "ch";
}