
let search = document.getElementById('search')
let ulItem = document.getElementById('ul-item')
let ulListItems = document.getElementsByTagName('li')

let windowHeight = window.innerHeight


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

