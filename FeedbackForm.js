const mouse_move_one = document.querySelector(".mouse_move_one");
const mouse_move_two = document.querySelector(".mouse_move_two");


window.addEventListener("mousemove", e => {
    mouse_move_one.style.transform = `translate(${e.clientX / 10}px, ${e.clientY / 10}px)`
    mouse_move_two.style.transform = `translate(-${e.clientX / 10}px, -${e.clientY / 10}px)`
})