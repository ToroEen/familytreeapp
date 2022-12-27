function createChild(obj) {
    // Clone a user object
    let new_user = user_object.cloneNode(true)

    // Set the IDs
    new_user.id = "parent_" + (parent_id + 1)
    new_user.children[0].id = "user_" + (user_id + 1)

    parent_id += 1
    user_id += 1

    // Update the data for parent and child
    obj.setAttribute('data-children', obj.getAttribute('data-children') + new_user.id + ",")

    new_user.setAttribute('data-parent', obj.parentElement.id)

    // Get parent children object
    children = obj.getAttribute('data-children').split(",")
    children.pop()

    if (children.length > 1) {
        obj.parentElement.children[1].appendChild(new_user)
    } else {
        let new_generation = document.createElement("div")

        new_generation.classList.add("generation")
        new_generation.id = "generation_" + (parseInt(obj.parentElement.id.split("_")[1]) + 1).toString()

        generation_id += 1

        obj.parentElement.appendChild(new_generation)

        console.log(new_generation)

        new_generation.appendChild(new_user)
    }
}