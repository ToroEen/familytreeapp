function createSibling(obj, rightSide) {
    // Get the sibling on which the functions was called
    let sibling = obj.parentElement.parentElement

    // Get the parent
    let parent_obj = document.getElementById(sibling.getAttribute('data-parent'))

    // Get the generation on which the sibling was created
    const generation = document.getElementById("generation_" + (parent_obj.parentElement.id.split("_")[1] + 1))
    
    // Create a user clone
    new_user = user_object.cloneNode(true)
    new_user.id = id + 1

    id += 1

    new_user.setAttribute('data-parent', sibling.getAttribute('data-parent'))

    // Add use robject before or after the sibling
    if (rightSide) {
        // Add the child to the parrent
        parent_obj.setAttribute('data-children', parent_obj.getAttribute('data-children') + id + ",")

        // Check if the last element of this generation is another generation
        if (generation.lastChild.classList.contains("generation")) {
            generation.insertBefore(new_user, generation.lastChild)
        } else {
            generation.appendChild(new_user)
        }
        
    } else {
        // Add the child to the parrent
        parent_obj.setAttribute('data-children', id + "," + parent_obj.getAttribute('data-children'))

        generation.insertBefore(new_user, sibling)
    }

    // Arrange the children
    children = parent_obj.getAttribute('data-children').split(",")
    children.pop()

    arrangeChildren(children)
}