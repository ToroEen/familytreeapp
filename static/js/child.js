function createChild(obj) {
    // Get the parent
    parent_obj = obj.parentElement.parentElement

    // Create user clone
    new_user = user_object.cloneNode(true)
    new_user.id = id + 1

    id += 1

    // Set parent ID to the user
    new_user.setAttribute('data-parent', parent_obj.id)

    // Append the new child to the children list of the parent
    parent_obj.setAttribute('data-children', parent_obj.getAttribute('data-children') + id + ",")

    children = parent_obj.getAttribute('data-children').split(",")
    children.pop()

    // Get the row ID of the parent
    row = parseInt(parent_obj.parentElement.id.split("_")[1])

    // Get the row underneath the parent
    let row_obj = document.getElementById("row_" + (row + 1).toString())

    // Create a new row if it doesnt exist
    if (row_obj == 'undefined' || row_obj == null) {
        let new_row = document.createElement("div")

        new_row.classList.add("row")
        new_row.id = "row_" + (row_id + 1).toString()

        row_id += 1

        body.appendChild(new_row)

        row_obj = new_row
    }

    // Add the child object to the earlier defined row
    row_obj.appendChild(new_user)

    // Call the arrange children function which cleans up the visual-relation between child and parent 
    arrangeChildren(children)
}