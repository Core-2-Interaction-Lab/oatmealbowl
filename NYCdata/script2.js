const appleData = 
[
	{
	  "Name": "Tompkins Sq Greenmarket",
	  "Borough": "Manhattan",
	  "Street Address": "E. 7th St & Ave A",
	  "Days of Operation": "Sun",
	  "Hours": "9am-5pm",
	  "Season Opened": "Year-Round",
	  "EBT": "EBT: Yes",
	  "Apple": "Gold Delicious",
	  "Rating": "Rating: 4/5",
	  "*": ""
	},
	{
	  "Name": "Union Sq Greenmarket",
	  "Borough": "Manhattan",
	  "Street Address": "E. 17th St & Union Sq W",
	  "Days of Operation": "Mon, Wed, Fri & Sat",
	  "Hours": "8am-6pm",
	  "Season Opened": "Year-Round",
	  "EBT": "EBT: Yes",
	  "Apple": "MacIntosh",
	  "Rating": "Rating: 5/5",
	  '*': "*there's no bite picture for this apple because it was too good that I forgot*"
	},
	{
	  "Name": "Astor Place Greenmarket",
	  "Borough": "Manhattan",
	  "Street Address": "Astor Pl between Broadway & Lafayette",
	  "Days of Operation": "Tues",
	  "Hours": "8am-4pm",
	  "Season Opened": "Year-Round",
	  "EBT": "EBT: Yes",
	  "Apple": "Mutzu",
	  "Rating": "Rating: 4.5/5",
	  "*": ""
	},
	{
	  "Name": "Tribeca Greenmarket",
	  "Borough": "Manhattan",
	  "Street Address": "Greenwich & Chambers St",
	  "Days of Operation": "Wed & Sat",
	  "Hours": "8am-3pm",
	  "Season Opened": "Year-Round",
	  "EBT": "EBT: Yes",
	  "Apple": "Red Delicious",
	  "Rating": "Rating: 3.5/5",
	  "*": ""
	},
	{
	  "Name": "City Hall Greenmarket",
	  "Borough": "Manhattan",
	  "Street Address": "Broadway & Chambers St",
	  "Days of Operation": "Tues & Fri",
	  "Hours": "8am-4pm",
	  "Season Opened": "Year-Round",
	  "EBT": "EBT: Yes",
	  "Apple": "Pink Lady",
	  "Rating": "Rating: 3.5/5",
	  "*": ""
	},
	{
	  "Name": "Bowling Green Greenmarket",
	  "Borough": "Manhattan",
	  "Street Address": "Broadway & Battery Pl",
	  "Days of Operation": "Tues & Thurs",
	  "Hours": "8am-5pm",
	  "Season Opened": "Year-Round",
	  "EBT": "EBT: Yes",
	  "Apple": "Winesap",
	  "Rating": "Rating: 3/5",
	  "*": ""
	}
  ];

console.log(appleData[0]["Name"])

const circles = document.querySelectorAll('.apple-button');

		const blur = document.querySelector('.blur');
		const text = document.getElementById('text');
		const audio = new Audio('./appleCrunch.mp3');
		
// Info on each respective apple and their market//
		circles.forEach( item => {
			console.log(item.classList)
			item.dataset.name = item.classList[1];
			const itemName = item.dataset.name;
			let itemIndex;
			if (itemName === "goldDelicious") {
				itemIndex = 0;
			} else if (itemName === "pinkLady") {
				itemIndex = 4;
			}
			else if (itemName === "mutzu") {
				itemIndex = 2;
			}
			else if (itemName === "RedDelicious") {
				itemIndex = 3
			}
			else if (itemName === "MacIntosh") {
				itemIndex = 1
			}
			else if (itemName === "winesap") {
				itemIndex = 5
			}
			
			
			item.dataset.index = itemIndex
			item.addEventListener('click', () => {
				item.classList.toggle('active');
				blur.classList.toggle('active');
				text.classList.toggle('active');
				audio.play('active');
				
			});
			const appleImage = item.children[0]

//command to replace apple with "bite" in addition to text//

			appleImage.addEventListener('click', () => { 
				
				// if (image.src.match("pinkLady.png")) {
				// image.src = "pinkLady_Bite.PNG";
				// } else {
				// image.src = "pinkLady.png";
				// }
				console.log(appleImage.dataset.bitten)

				if (appleImage.dataset.bitten === 'true') {
					appleImage.src = item.dataset.name + ".png";
					appleImage.dataset.bitten = false;
				} else {
					appleImage.src = "bite_" + item.dataset.name + ".png";
					appleImage.dataset.bitten = true;
					let appleEntry = appleData[item.dataset.index]
					text.innerHTML = `
					<h2>${appleEntry["Apple"]}</h2>
					<h3 class="text-h2">${appleEntry["Name"]}</h3>
					<h3 class='text-h2'>${appleEntry['Borough']}</h3>
					<h3 class='text-h2'>${appleEntry['Street Address']}</h3>
					<h3 class='text-h2'>${appleEntry['Days of Operation']}</h3>
					<h3 class='text-h2'>${appleEntry['Hours']}</h3>
					<h3 class='text-h2'>${appleEntry['Season Opened']}</h3>
					<h3 class='text-h2'>${appleEntry['EBT']}</h3>
					<h3 class='text-h2'>${appleEntry['Rating']}</h3>
					<h3 class='text-h2'>${appleEntry['*']}</h3>
					`;
					// <h2 class='text-h3'>${appleEntry['Borough']}</h2> ;
					
				}
			}
			)
			
		
		})


		


		

		  