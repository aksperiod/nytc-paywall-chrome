import "../css/popup.css";

const modal = document.querySelectorAll('.nytc---modal-window---windowContainer.nytc---modal-window---isShown');

if (modal[0] && modal[0].remove) {
  modal[0].remove();
}

document.body.classList.remove("nytc---modal-window---noScroll");
document.documentElement.classList.remove("nytc---modal-window---noScroll");
