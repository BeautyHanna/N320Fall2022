//class that contains the logic for the game

class Game {
    foundCircles = 0;
    totalCircles = 0;
    searchColor ="#7603F1";
    normalColor ="#41C8F0";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor(){
        //draw the circles
        for(var i = 0; i <35; i++){

            //create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            //newCirc.setAttribute("radius", 15);
            

            //circle style class
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            //randomly choose what reveal color the circle is
            if(Math.random() < .3){

                //set to be the 'looking for' color
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles ++;
            } else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //when mouse over the circles, it'll show hidden color in the data-hiddencolor attribute
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })
            
            //when cursor is no longer on  the circle, it'll revert back to original color
            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "rgb(82, 1, 55)";
            })

            newCirc.addEventListener("click", (event) => {

                //if the user clicked on the circle with the "looking for" color (the purple color), it'll remove the purple circle
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                    //store how many have been clicked on 
                    this.foundCircles++;

                    //update the found UI (found bar)
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                    
                }
            })


            //add the circle to the screen
            this.gameZone.appendChild(newCirc);
        } 
    }
}

class FoundBar {
    element = document.getElementById("foundBar")
    maxSize = 130;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize); 
    }
}

// let f = new FoundBar();
// f.setPercent(0)
let g = new Game();