// ↑
function bottomToTop(obj) {
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
}

// ↱
function bottomToRight(obj) {
    let element = obj.children[0].children[1];
    
    element.innerHTML = '<div></div>'
    element.classList.add("bottom-to-right")

    if (element.classList.contains("bottom-top")) {
        element.classList.remove("bottom-top")
    }

    if (element.classList.contains("bottom-to-left")) {
        element.classList.remove("bottom-to-left")
    }
}

// ↰
function bottomToLeft(obj) {
    let element = obj.children[0].children[1];
    
    element.innerHTML = '<div></div>'
    element.classList.add("bottom-to-left")

    if (element.classList.contains("bottom-top")) {
        element.classList.remove("bottom-top")
    }

    if (element.classList.contains("bottom-to-right")) {
        element.classList.remove("bottom-to-right")
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
            bottomToRight(child)
        } else if (i === half && odd) {
            bottomToTop(child)
        } else {
            bottomToLeft(child)
        }
    }
}