!function(){"use strict";class t{constructor(t){this.boardSize=t,this.cells=[],this.activeHole=0,this.gameBoard=document.querySelector(".game-board"),this.createBoard()}createBoard(){for(let t=1;t<=this.boardSize**2;t+=1){const e=document.createElement("div");e.className=`hole hole-${t}`,this.gameBoard.append(e),this.cells.push(e)}}setNextCell(){const t=document.querySelectorAll(".hole"),e=Array.from(t);e[this.activeHole].classList.remove("hole_has-goblin"),this.activeHole=Math.floor(Math.random()*e.length),e[this.activeHole].classList.add("hole_has-goblin")}showImage(){this.setNextCell()}}const e=new t(4);e.showImage(),new class extends t{constructor(t){super(),this.board=t,this.eventClick(),this.dead=0,this.lost=0,this.clickOrNo=!0}scoring(t){const e=document.getElementById("dead"),s=document.getElementById("lost");t?(this.dead+=1,e.textContent=this.dead):(this.lost+=1,s.textContent=this.lost,5===this.lost&&(alert(`GAME OVER!!! Your account ${this.dead}`),s.textContent=0,e.textContent=0,this.lost=0,this.dead=0)),this.board.setNextCell()}eventClick(){setInterval((()=>{this.clickOrNo?this.clickOrNo=!1:this.scoring(!1)}),1e3),this.board.cells.forEach((t=>{t.addEventListener("click",(()=>{this.clickOrNo=!0,t.classList.contains("hole_has-goblin")?(this.scoring(!0),this.board.setNextCell()):this.scoring(!1)}))}))}}(e)}();
//# sourceMappingURL=app.bundle.js.map