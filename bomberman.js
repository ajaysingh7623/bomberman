var score;
var cellStatus = [];
var bombcells = new Set();


function startGame(){
	score =0;
	
	
	document.getElementById("mainSection").innerHTML="";
	let scoreE=document.createElement("div");
	scoreE.id="score";
	scoreE.innerText="Score :"+ score;
	scoreE.style.textAlign="center";
	document.getElementById("mainSection").appendChild(scoreE);
	for(let i=0;i<81;i++)
	cellStatus.push(0);
     
	generateRandom();
	let id=0;
	document.getElementById("mainSection").style.marginTop="5em";
	for(let i=0;i<9;i++)
	{ 
     let row =document.createElement("div");
	 row.className="row";
	 for(let j=0;j<9;j++)
	 {
		 let col=document.createElement("div");
		 col.className="col";
		 col.style.backgroundColor="blue";
		 col.innerText="c"+(id);
		 col.style.border="2px solid black";
		 col.style.height="5em";
		 
		 col.id=id;
		 id++;
		 col.onclick=()=>{updateScore(col.id)}
		 
		 row.appendChild(col);
		 
	 }
	 document.getElementById("mainSection").appendChild(row);
	}
}

function updateScore(id){
	if(cellStatus[id]==1){
		return;
	}
	else if(cellStatus[id]==0){
		document.getElementById(id).style.background="green";
		score+=5;
		document.getElementById("score").innerText="SCORE :" +score;
		console.log(" "+score);
	cellStatus[id]=1;
	}
	else{
		let flag =confirm("you clicked a bomb cell game over")
		if(flag)
			startGame();
		else
		    return;
	}
}


function generateRandom()
{
	while(bombcells.size<10){
		let index =Math.floor(Math.random()*(80)+0);
	bombcells.add(index);
	console.log(index);
	
	}
	
	bombcells.forEach(idx=>{
		cellStatus[idx]=-1;
	})
}
startGame();