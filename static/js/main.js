const body = document.body
const user_object = document.getElementById(0)

let id = 1
let row_id = 1

function checkInput(obj) {
    if (obj.value === "") {
        obj.value = "Unnamed"
    }

    obj.style.width = (obj.value + "e").length + "ch";
}

function arrangeChildren(children_array) {
    let half = Math.ceil(children_array.length / 2) - 1;
    let odd = true

    if (children_array.length % 2 === 0) {
        odd = false
        half = Math.ceil(children_array.length / 2);
    }

    for (var i = 0; i < children_array.length; i++) {
        parent_relation = document.getElementById(children_array[i]).children[1]

        if (i < half) {
            if (parent_relation.classList.contains("parent-relation-right")) {
                parent_relation.classList.remove("parent-relation-right")
                parent_relation.classList.add("parent-relation-left")
            } 
            if (parent_relation.classList.contains("parent-relation-vertical")) {
                parent_relation.classList.remove("parent-relation-vertical")
                parent_relation.classList.add("parent-relation-left")
                parent_relation.innerHTML = '<div></div>'
            }
            if (parent_relation.classList.contains("top-bottom")) {
                parent_relation.classList.remove("top-bottom")
                parent_relation.classList.add("parent-relation-left")
                parent_relation.innerHTML = '<div></div>'
            }

            extra_relation = document.getElementById(children_array[i]).children[2]

            if (extra_relation.classList.contains("empty")) {
                extra_relation.classList.remove("empty")
                extra_relation.classList.add("parent-relation-horizontal-left")
                extra_relation.innerHTML = '<div></div>'
            }
        } else if (i === half && odd) {
            parent_relation.classList.add("parent-relation-vertical")
            parent_relation.classList.remove("parent-relation-right")
            parent_relation.innerHTML = '<span></span>'

            extra_relation = document.getElementById(children_array[i]).children[0]

            if (extra_relation.classList.contains("parent-relation-horizontal-right")) {
                extra_relation.classList.remove("parent-relation-horizontal-right")
                extra_relation.classList.add("empty")
            }

            extra_relation = document.getElementById(children_array[i]).children[2]

            if (extra_relation.classList.contains("parent-relation-horizontal-left")) {
                extra_relation.classList.remove("parent-relation-horizontal-left")
                extra_relation.classList.add("empty")
            }
        } else {
            if (parent_relation.classList.contains("parent-relation-vertical")) {
                parent_relation.classList.remove("parent-relation-vertical")
                parent_relation.classList.add("parent-relation-right")
                parent_relation.innerHTML = '<div></div>'
            } 
            if (parent_relation.classList.contains("top-bottom")) {
                parent_relation.classList.remove("top-bottom")
                parent_relation.classList.add("parent-relation-right")
                parent_relation.innerHTML = '<div></div>'
            }
            if (parent_relation.classList.contains("parent-relation-left")) {
                parent_relation.classList.remove("parent-relation-left")
            }

            extra_relation = document.getElementById(children_array[i]).children[0]

            if (extra_relation.classList.contains("empty")) {
                extra_relation.classList.remove("empty")
                extra_relation.classList.add("parent-relation-horizontal-right")
                extra_relation.innerHTML = '<div></div>'
            }
        }
    }
}