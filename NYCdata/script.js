const circle = document.querySelector('.apple-button');
		const blur = document.querySelector('.blur');
		const text = document.querySelector('.text');
		

		circle.addEventListener('click', () => {
			circle.classList.toggle('active');
            blur.classList.toggle('active');
            text.classList.toggle('active');
			
		});

		function changeImage() {
			var image = document.getElementById("bite");
			if (image.src.match("pinkLady.png")) {
			  image.src = "PL_Bite.PNG";
			} else {
			  image.src = "pinkLady.png";
			}
		  }
		