function createSibling(obj, rightSide) {
    // Get the sibling on which the functions was called
    const sibling = obj.parentElement.parentElement

    // Get the row on which the sibling was created
    const row = sibling.parentElement
    
    // Create a user clone
    new_user = user_object.cloneNode(true)
    new_user.id = id + 1

    id += 1

    new_user.setAttribute('data-parent', sibling.getAttribute('data-parent'))

    // Get the parent
    let parent_obj = document.getElementById(sibling.getAttribute('data-parent'))

    // Add the child to the parrent
    parent_obj.setAttribute('data-children', parent_obj.getAttribute('data-children') + id + ",")

    children = parent_obj.getAttribute('data-children').split(",")
    children.pop()

    let relations = new_user.querySelectorAll(".top-bottom")[0]

    if (rightSide) {
        relations.classList.add("parent-relation-right")
        relations.classList.remove("top-bottom")
        relations.innerHTML = '<div></div>'

        row.appendChild(new_user)

        relations = obj.parentElement.parentElement

        if (relations.classList.contains("parent-relation-vertical")) {
            relations.classList.remove("parent-relation-vertical")
            relations.classList.add("parent-relation-left")
        }
    } else {
        relations.classList.add("parent-relation-left")
        relations.classList.remove("top-bottom")
        relations.innerHTML = '<div></div>'

        row.insertBefore(new_user, obj.parentElement.parentElement)

        relations = obj.parentElement.parentElement

        if (relations.classList.contains("parent-relation-vertical")) {
            relations.classList.remove("parent-relation-vertical")
            relations.classList.add("parent-relation-right")
        }
    }

    // Arrange the children
    arrangeChildren(children)
}