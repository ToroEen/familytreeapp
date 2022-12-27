function createChild(obj) {
    new_user = user_object.cloneNode(true)
    new_user.id = id + 1

    id += 1

    row = parseInt(obj.parentElement.parentElement.parentElement.id.split("_")[1])

    let row_obj = document.getElementById("row_" + (row + 1).toString())

    if (row_obj == 'undefined' || row_obj == null) {
        let new_row = document.createElement("div")

        new_row.classList.add("row")
        new_row.id = "row_" + (row_id + 1).toString()

        row_id += 1

        body.appendChild(new_row)

        row_obj = new_row
    }

    parent_obj = obj.parentElement.parentElement

    new_user.setAttribute('data-parent', parent_obj.id)

    row_obj.appendChild(new_user)

    relation = new_user.querySelectorAll(".top-bottom")[0]
    relation.classList.add("parent-relation-vertical")
    relation.classList.remove("top-bottom")
    relation.innerHTML = '<span></span>'

    parent_obj.setAttribute('data-children', parent_obj.getAttribute('data-children') + id + ",")

    children = parent_obj.getAttribute('data-children').split(",")
    children.pop()

    arrangeChildren(children)
}