let container = document.getElementById("container");

const colors = ['unpainted', 'painted1', 'painted2', 'painted3'];

const resetBox = (reso) => {
  if (!reso) {
    reso = 16;
  }
  container.innerHTML = '';
  for (let columns = 0; columns < reso; columns++) {
    let columnbox = document.createElement("div");
    columnbox.id = `column-${columns}`;
    columnbox.className = "columnbox";
    for (let rows = 0; rows < reso; rows++) {
      let rowbox = document.createElement("div");
      rowbox.id = `rowbox-${rows}`;
      rowbox.className = "rowbox";
        rowbox.style.width = `${800 / reso}px`
        rowbox.style.height = `${800 / reso}px`
      rowbox.addEventListener("mouseover", () => {
        rowbox.classList.add("hovercolor");
      });
      rowbox.addEventListener("mouseout", () => {
        rowbox.classList.remove("hovercolor");
      });
      rowbox.classList.add('lined')
      
      rowbox.dataset.currentIndex = 0;

      rowbox.addEventListener('click', () => {
        let currentIndex = parseInt(rowbox.dataset.currentIndex, 10);
        rowbox.classList.remove(colors[currentIndex]);
        currentIndex = (currentIndex + 1) % colors.length;
        rowbox.classList.add(colors[currentIndex]);
        rowbox.dataset.currentIndex = currentIndex;
      })

      columnbox.appendChild(rowbox);
    }
    container.appendChild(columnbox);
  }
  modalBox.style.display = "none";
};

const modalBox = document.getElementById("modal");
const makeNew = document.getElementById("makeNew"); // this one opens the menu to create a new one
const closeBtn = document.getElementById("closeBtn");
const createNewBtn = document.getElementById("createNewBtn"); // this one confirms the creation of a new one and resets the grid accordingly
const newReso = document.getElementById("newReso");
const clearGrid = document.getElementById("clearGrid");
const toggleLines = document.getElementById("toggleLines");

let resolution = '';

makeNew.onclick = () => {
  modalBox.style.display = "block";
};

clearGrid.onclick = () => {
    resetBox(resolution)
}

closeBtn.onclick = () => {
  modalBox.style.display = "none";
};

toggleLines.onclick = () => {
    const rowbox = document.querySelectorAll('.rowbox');
    rowbox.forEach(box => {
        box.classList.toggle('lined')
    })
}

createNewBtn.onclick = () => {
    if (newReso.value > 64 || newReso.value < 1) {
        alert('Please specify a value between 1-64!')
    } else {
        resolution = newReso.value;
        resetBox(resolution);
    }
}


resetBox();



