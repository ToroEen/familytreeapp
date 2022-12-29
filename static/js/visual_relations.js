// ↑
function bottomToTop(obj, extra_piece) {
    let element = obj.children[0].children[1];
    
    element.innerHTML = '<div></div>'
    element.classList.add("bottom-top")

    if (element.classList.contains("top-bottom")) {
        element.classList.remove("top-bottom")
    }

    if (element.classList.contains("bottom-to-left")) {
        element.classList.remove("bottom-to-left")
    }

    if (element.classList.contains("bottom-to-right")) {
        element.classList.remove("bottom-to-right")
    }

    if (extra_piece) {
        element = obj.children[0].children[0]

        element.innerHTML = '<div></div>'
        element.classList.add("left-to-right")

        element = obj.children[0].children[2]

        element.innerHTML = '<div></div>'
        element.classList.add("left-to-right")
    }
}

// ↱
function bottomToRight(obj, first_obj) {
    let element = obj.children[0].children[1];
    
    element.innerHTML = '<div></div>'
    element.classList.add("bottom-to-right")

    if (element.classList.contains("bottom-top")) {
        element.classList.remove("bottom-top")
    }

    if (element.classList.contains("bottom-to-left")) {
        element.classList.remove("bottom-to-left")
    }

    element = obj.children[0].children[2]

    element.innerHTML = '<div></div>'
    element.classList.add("left-to-right")

    if (first_obj) {
        element = obj.children[0].children[0]

        element.innerHTML = '<div></div>'
        element.classList.add("left-to-right") 
    }
}

// ↰
function bottomToLeft(obj, last_child) {
    let element = obj.children[0].children[1];
    
    element.innerHTML = '<div></div>'
    element.classList.add("bottom-to-left")

    if (element.classList.contains("bottom-top")) {
        element.classList.remove("bottom-top")
    }

    if (element.classList.contains("bottom-to-right")) {
        element.classList.remove("bottom-to-right")
    }

    element = obj.children[0].children[0]

    element.innerHTML = '<div></div>'
    element.classList.add("left-to-right")

    if (!last_child) {
        element = obj.children[0].children[2]

        element.innerHTML = '<div></div>'
        element.classList.add("left-to-right")
    }
}

// Arrange children
function arrangeChildren(children) {
    let half = Math.ceil(children.length / 2) - 1;
    let odd = true

    if (children.length % 2 === 0) {
        odd = false
        half = Math.ceil(children.length / 2);
    }

    for (var i = 0; i < children.length; i++) {
        child = document.getElementById(children[i])

        if (i < half) {
            if (i > 0) {
                bottomToRight(child, true)
            } else {
                bottomToRight(child, false)
            }
        } else if (i === half && odd) {
            if (children.length > 2) {
                bottomToTop(child, true)
            } else {
                bottomToTop(child, false)
            }
            
        } else {
            if (i + 1 === children.length) {
                bottomToLeft(child, true)
            } else {
                bottomToLeft(child, false)
            }
        }
    }
}