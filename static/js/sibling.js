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

    // Update the data for parent and child
    parent_obj.querySelector(".user-object").setAttribute('data-children', parent_obj.querySelector(".user-object").getAttribute('data-children') + new_user.id + ",")

    new_user.setAttribute('data-parent', parent_obj.querySelector(".user-object").parentElement.id)

    generation = parent_obj.querySelector(".generation")

    if (right_side) {
        generation.appendChild(new_user)
    } else {
        generation.insertBefore(new_user, obj.parentElement)
    }
}