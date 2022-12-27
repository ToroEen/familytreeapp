function createSibling(obj, rightSide) {
    // Get the sibling on which the functions was called
    let sibling = obj.parentElement.parentElement

    // Get the row on which the sibling was created
    const row = sibling.parentElement
    
    // Create a user clone
    new_user = user_object.cloneNode(true)
    new_user.id = id + 1

    id += 1

    new_user.setAttribute('data-parent', sibling.getAttribute('data-parent'))

    // Add use robject before or after the sibling
    if (rightSide) {
        row.appendChild(new_user)
    } else {
        row.insertBefore(new_user, sibling)
    }

    // Get the parent
    let parent_obj = document.getElementById(sibling.getAttribute('data-parent'))

    // Add the child to the parrent
    parent_obj.setAttribute('data-children', parent_obj.getAttribute('data-children') + id + ",")

    // Arrange the children
    children = parent_obj.getAttribute('data-children').split(",")
    children.pop()

    arrangeChildren(children)
}