const item = document.querySelectorAll('.item')

console.log(`Number of categories: ${item.length}`);

  for(let element of item){
     console.log(`Category: ${element.querySelector('h2').textContent}`)
     console.log(`Elements: ${element.querySelectorAll('li').length}`)
  }