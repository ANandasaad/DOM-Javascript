const count = 10;
let index = 0;

function addItems() {
  const fragment = document.createDocumentFragment();

  for (let i = index + 1; i <= index + count; ++i) {
    const item = document.createElement("p");

    item.classList.add("item");
    item.textContent = `#${i}`;

    fragment.appendChild(item);
  }

  document.getElementById("container").appendChild(fragment);
  index += count;
}

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    addItems();
  });
});

io.observe(document.getElementById("loading"));

addItems();
