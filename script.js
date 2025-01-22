let container = document.getElementById("container");


for (let columns = 0; columns < 16; columns++) {
    let columnbox = document.createElement('div');
    columnbox.id = `column-${columns}`
    columnbox.className = 'columnbox'
  for (let rows = 0; rows < 16; rows++) {
    let rowbox = document.createElement("div");
    rowbox.id = `rowbox-${rows}`
    rowbox.className = 'rowbox'

    rowbox.addEventListener('mouseover', () => {
        rowbox.classList.add('hovercolor') ;
    })
    rowbox.addEventListener('mouseout', () => {
        rowbox.classList.remove('hovercolor');
    })

    columnbox.appendChild(rowbox);
  }
  container.appendChild(columnbox);
}

