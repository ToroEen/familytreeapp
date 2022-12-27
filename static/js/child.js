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

    // Get the generation ID of the parent
    generation = parseInt(parent_obj.parentElement.id.split("_")[1])

    // Get the generation underneath the parent
    let generation_obj = document.getElementById("generation_" + (parseInt(parent_obj.parentElement.id.split("_")[1]) + 1).toString())

    // Create a new generation if it doesnt exist
    if (generation_obj == 'undefined' || generation_obj == null) {
        let new_generation = document.createElement("div")

        new_generation.classList.add("generation")
        new_generation.id = "generation_" + (parseInt(parent_obj.parentElement.id.split("_")[1]) + 1).toString()

        generation_id += 1

        parent_obj.parentElement.appendChild(new_generation)

        generation_obj = new_generation
    }

    // Add the child object to the earlier defined generation
    generation_obj.appendChild(new_user)

    // Call the arrange children function which cleans up the visual-relation between child and parent 
    arrangeChildren(children)
}