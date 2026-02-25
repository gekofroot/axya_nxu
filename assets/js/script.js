
let search = document.getElementById('search')
let ulListItems = document.getElementsByTagName('li')

let windowHeight = window.innerHeight


for (let x = 0; x < ulListItems.length; x++) {
  if (ulListItems[x].top > windowHeight / 2) {
    ulListitems[x].style.background = '#00ff00'
  }
}

let eventString = ''
search.addEventListener('keyup', () => {
  let eventKey = event.key
  for (let x = 0; x < ulListItems.length; x++) {
    let currentUlItem = ulListItems[x].innerHTML.toLowerCase()
    if (currentUlItem.includes(search.value.toLowerCase())) {
      ulListItems[x].style.opacity = '100%'
      setTimeout(() => {
	ulListItems[x].style.display = 'flex'
      }, 200)
    } else {
      ulListItems[x].style.opacity = '0'
      setTimeout(() => {
	ulListItems[x].style.display = 'none'
      }, 200)
    }
  }
})

