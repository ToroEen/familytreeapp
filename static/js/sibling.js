function createSibling(obj, right_side) {
    // Parent 
    let parent_obj = document.getElementById(obj.parentElement.getAttribute("data-parent"));
    
    // Clone a user object
    let new_user = user_object.cloneNode(true)

    // Set the IDs
    new_user.id = "parent_" + (parent_id + 1)
    new_user.children[0].id = "user_" + (user_id + 1)

    parent_id += 1
    user_id += 1

    // Set new user visual relation
    bottomToTop(new_user)

    // Update data for child
    new_user.setAttribute('data-parent', parent_obj.querySelector(".user-object").parentElement.id)

    // Get the generation to append the child to
    generation = parent_obj.querySelector(".generation")

    if (right_side) {
        // Update data for parent
        parent_obj.querySelector(".user-object").setAttribute('data-children', parent_obj.querySelector(".user-object").getAttribute('data-children') + new_user.id + ",")

        // Append child to generation after the sibling (becaues added from the right)
        generation.appendChild(new_user)
    } else {
        // Update data for parent
        parent_obj.querySelector(".user-object").setAttribute('data-children', new_user.id + "," + parent_obj.querySelector(".user-object").getAttribute('data-children'))

        // Append child to generation before sibling (because added from the left)
        generation.insertBefore(new_user, obj.parentElement)
    }

    // Get all the children of parent
    children = parent_obj.children[0].getAttribute('data-children').split(",")
    children.pop()

    // Arrange the children
    arrangeChildren(children)
}