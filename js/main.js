(()=>{
	console.log("javacript is linked up");

	const instrumentIcons = document.querySelectorAll('#icons img'),
		  playerIcons = document.querySelectorAll('#player div');

	let xButton = document.querySelector('#resetPage');


	function dragStart(event){
		// debugger;
		event.dataTransfer.setData("savedID", this.id);
	}

	function dragOver(event){
		event.preventDefault();
		console.log('dragged over me');
	}

	function dropped(event){
		event.preventDefault();
		console.log('dropped something on me');
		let targetID = event.dataTransfer.getData("savedID");
		// debugger;
		event.target.appendChild(document.querySelector(`#${targetID}`));

		changeImage(targetID,event.target.className);

		changeContainer(event.target.className);

		createAudio(targetID);
		createPlay();
		createStop();
		createSlider();
		activateStop();
		activatePlay();
		activateSlider();

		console.log("i dragged this image:", targetID);
	}


	function changeImage(imgId,classId){
		// debugger;
		let imG = document.querySelector(`.${classId} img`);
		imG.src = `images/${imgId}-white.svg`;
		imG.style.height = "60px";
		imG.style.width = "60px";

	}

	function changeContainer(divClass){
		let divContainer = document.querySelector(`.${divClass}`);
		divContainer.style.opacity = "100%"; 
	}
	function reloadPage(){
		window.location.reload();
	}

	function createAudio(source){

		
	 	let newAudio = document.createElement('audio');
	 	newAudio.src = `audio/${source}.wav`;
	 	
		newAudio.load();
		newAudio.play();
		newAudio.loop = true;
		event.target.appendChild(newAudio);
		
		

	 }

	 function createPlay(){
	 	let play = document.createElement('button');
	 	// debugger;
	 	play.className = 'play';
	 	event.target.appendChild(play);
	 }

	 function createStop(){
	 	let stop = document.createElement('button');
	 	// debugger;
	 	stop.className = 'stop';
	 	event.target.appendChild(stop);

	 }

	 function createSlider(){
	 	let slider = document.createElement('input');

	 	slider.type = 'range';
	 	slider.className = 'volume-control';
	 	slider.min = '0';
	 	slider.max = '100';
	 	slider.step = '1';
	 	event.target.appendChild(slider);
	 }

	 function stopAudio(){
	 	let audioContainer = this.parentNode.className;
	 	let sButton = document.querySelector(`.${audioContainer} audio`);
	 	sButton.pause();
	 }

	 function playAudio(){
	 	let audioContainer = this.parentNode.className;
	 	let pButton = document.querySelector(`.${audioContainer} audio`);
	 	pButton.play();
	 }

	 function volumeChange(){

	 	let sliderContainer = this.parentNode.className;
	 	let vButton = document.querySelector(`.${sliderContainer} audio`);
	 	
	 	vButton.volume = (this.value)/100;
	 	// debugger;
	 	
	 }

	 function activateStop(){
	 	let stopButton = document.querySelectorAll('.stop');

	 	stopButton.forEach(stopBtn => stopBtn.addEventListener("click", stopAudio));
	 }

	 function activatePlay(){
	 	let playButton = document.querySelectorAll('.play');

	 	playButton.forEach(playBtn => playBtn.addEventListener("click", playAudio));
	 }

	 function activateSlider(){
	 	let volumeSlider = document.querySelectorAll('.volume-control');

	 	volumeSlider.forEach(input => input.addEventListener("input", volumeChange));
	 }


	instrumentIcons.forEach(img=> img.addEventListener("dragstart", dragStart));

	playerIcons.forEach(pl => {
		pl.addEventListener("dragover", dragOver);
		pl.addEventListener("drop", dropped);
	});

	xButton.addEventListener("click", reloadPage);

	
	

})();