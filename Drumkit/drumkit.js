{
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
        hiHatTop = document.getElementById('hihat-top');
		shrek = document.getElementById('Shrek');
		donkey = document.getElementById('Donkey');
		fedora = document.getElementById('Fedora');
	
	const animateCrashOrRide = () => {
        crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

	const animateHiHatClosed = () => {
        hiHatTop.style.top = '171px';
      //  shrek.style.top ='70px';
        
    };
    const animateShrek =() => {
        shrek.style.top ='70px';
		fedora.style.top ='80px';
    };
    
    const animateDonkey=() => {
        donkey.style.visibility ='visible';
		fedora.style.visibility = "hidden";

    };

	const animateFedora=() => {
        fedora.style.visibility ='visible';

	};


	const playSound = e => {
		const keyCode = e.keyCode,
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

		switch(keyCode) {
			case 69:
			case 82:
                animateCrashOrRide();
                animateShrek();
				break;
			case 75:
                animateHiHatClosed();
                animateShrek();
				break;
			case 70:
					animateDonkey();
				break;
			case 72:
					animateFedora();
					break;
		
					break;
             default: animateShrek();
                    
		}

		keyElement.classList.add(playingClass);
	};

	const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;
		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;
		e.target.style.top = '166px';
    };	

    const removeShrekTransition= e => {
        shrek.style.top = '50px';
		fedora.style.top = '30'
	};	

	const removeDonkeyTransition= e => {
       donkey.style.visibility = 'hidden';
    };
	

	const removeFedoraTransition = e => {
		donkey.style.visibility = 'hidden';
	};	

	
	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;
		e.target.classList.remove(playingClass)
	};


	const drumKeys = Array.from(document.querySelectorAll('.key'));

	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	crashRide.addEventListener('transitionend', removeCrashRideTransition);
    hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);
	shrek.addEventListener('transitionend',removeShrekTransition);
	donkey.addEventListener('transitionend',removeDonkeyTransition);
	fedora.addEventListener('transitionend',removeFedoraTransition);
	
	window.addEventListener('keydown', playSound);
}