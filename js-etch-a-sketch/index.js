const body = document.querySelector("body");
body.style.cssText = "margin: 0; padding: 0;"
const container = document.querySelector(".container");
container.style.cssText = "display:flex; flex-direction: column;  flex-wrap: wrap; height: 100vh; border: solid; justify-content: space-between;"


const button = document.createElement("button");
button.style.cssText = "flex: 0; align-self: center; margin: 10px 0px;"
button.textContent = "Create Sketchpad!";
button.addEventListener("click", () => {
    const grid_size = prompt("Please enter a new grid size", 16);
    remove_grids();
    create_grids(container, grid_size);
    hover_effect();
})
container.appendChild(button);

function hover_effect(){
    const grids = document.querySelectorAll(".col");

    grids.forEach((grid) => {
        grid.addEventListener("mouseenter", () => {
            // Random rgb values for each hovering on non hovered tiles
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            // Opacity increment
            const opacity = parseFloat(grid.style.opacity);
            console.log(opacity);
            if(opacity < 1)
                grid.style.opacity = (opacity + 0.1).toString();
        });
        
      });
}


function remove_grids(){
    const grids = document.querySelectorAll(".row");
    grids.forEach((grid) => {
        grid.remove();
    })
}


function create_grids(container, n_grid) {
    for (let i = 0; i < n_grid; i++) {
        const div_row = document.createElement("div");
        div_row.classList.add("row");
        div_row.style.cssText = "display: flex; flex: 1; justify-content: space-evenly;"
        //  + "border 1px solid yellow;"
        for (let j = 0; j < n_grid; j++) {
            const div_col = document.createElement("div");
            div_col.classList.add("col");
            div_col.style.cssText = "flex: 1; opacity: 0;"
            //  + "border 1px solid purple;" 
            div_row.appendChild(div_col);
        }
        container.appendChild(div_row);
    }
}
