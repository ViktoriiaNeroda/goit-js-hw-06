const listItems = document.querySelectorAll(".item")
console.log(`Number of categories: ${listItems.length}`)

// console.log(listItems)



listItems.forEach((element) =>
    console.log(`Category: ${element.firstElementChild.textContent}, 
        Elements: ${element.lastElementChild.children.length}`)
    );

