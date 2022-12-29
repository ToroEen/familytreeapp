// Constants
const body = document.body
const container = document.getElementById("container");
const user_object = document.getElementById("parent_0")

// IDs
let user_id = 1
let parent_id = 1
let generation_id = 1

// Drag to scroll variables
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

// Resize input field and set empty fields to "Unnamed"
function checkInput(obj) {
  if (obj.value === "") {
    obj.value = "Unnamed"
  }

  obj.style.width = (obj.value + "e").length + "ch";
}

// Apply events
container.addEventListener('mousedown', e => mouseIsDown(e));
container.addEventListener('mouseup', e => mouseUp(e))
container.addEventListener('mouseleave', e => mouseLeave(e));
container.addEventListener('mousemove', e => mouseMove(e));

function mouseIsDown(e) {
  // Start tracking cursor
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;

  // Update cursor styling
  container.style.cursor = 'grabbing';
  container.style.userSelect = 'none';
}
function mouseUp(e) {
  isDown = false;

  // Update cursor styling
  container.style.cursor = 'grab';
}
function mouseLeave(e) {
  isDown = false;
}
function mouseMove(e) {
  if (isDown) {
    // Prevent default behaviour
    e.preventDefault();

    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;

    container.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;

    container.scrollLeft = scrollLeft - walkX;
  }
}