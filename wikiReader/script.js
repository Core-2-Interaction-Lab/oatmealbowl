const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');
	
	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`
       
        
        // const itemImage = document.createElement('img') // And an image
		// itemImage.src = item.posterImage // Set the `src` attribute from the JSON
		// listItem.appendChild(itemImage) // And add that too

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p> <img src="${item.image}"></p>
				<p> Who: <span>${item.Who}</span></p>
				<p> What: ${item.What}</p>
                <p> When: ${item.When}</p>
				`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}


// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
})