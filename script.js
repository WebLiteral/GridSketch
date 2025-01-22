let container = document.getElementById("container");

const colors = ["unpainted", "painted1", "painted2", "painted3"]; // These are the css classes for each individual color

const resetBox = (reso) => {
  if (!reso) {
    reso = 16;
  }
  container.innerHTML = "";
  for (let columns = 0; columns < reso; columns++) {
    let columnbox = document.createElement("div");
    for (let rows = 0; rows < reso; rows++) {
      let rowbox = document.createElement("div");

      rowbox.className = "rowbox";

      //amount of px each box should be
      finalRes = 800 / reso;
      rowbox.style.width = `${finalRes}px`;
      rowbox.style.height = `${finalRes}px`;

      //hover effects
      rowbox.addEventListener("mouseover", () => {
        rowbox.classList.add("hovercolor");
      });
      rowbox.addEventListener("mouseout", () => {
        rowbox.classList.remove("hovercolor");
      });

      //adds class for guide lines
      rowbox.classList.add("lined");

      //color darkness data counter
      rowbox.dataset.currentIndex = 0;

      //changes color on click
      rowbox.addEventListener("click", () => {
        let currentIndex = parseInt(rowbox.dataset.currentIndex);
        rowbox.classList.remove(colors[currentIndex]);
        currentIndex = (currentIndex + 1) % colors.length;
        rowbox.classList.add(colors[currentIndex]);
        rowbox.dataset.currentIndex = currentIndex;
      });

      columnbox.appendChild(rowbox);
    }
    container.appendChild(columnbox);
  }
  modalBox.style.display = "none";
};

const modalBox = document.getElementById("modal"); // modal box
const closeBtn = document.getElementById("closeBtn"); // close button on modal box
const makeNew = document.getElementById("makeNew"); // menu for making new grid
const createNewBtn = document.getElementById("createNewBtn"); // confirm btn on modal box
const newReso = document.getElementById("newReso"); // input on modal box
const clearGrid = document.getElementById("clearGrid"); //clear grid btn
const toggleLines = document.getElementById("toggleLines"); //toggle line button

let resolution = "";

makeNew.onclick = () => {
  modalBox.style.display = "block";
};

clearGrid.onclick = () => {
  resetBox(resolution);
};

closeBtn.onclick = () => {
  modalBox.style.display = "none";
};


toggleLines.onclick = () => {
  const rowbox = document.querySelectorAll(".rowbox");
  rowbox.forEach((box) => {
    box.classList.toggle("lined");
  });
};

createNewBtn.onclick = () => {
  if (newReso.value > 64 || newReso.value < 1) {
    alert("Please specify a value between 1-64!");
  } else {
    resolution = newReso.value;
    resetBox(resolution);
  }
};

resetBox(); //init the box
