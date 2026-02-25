
let search = document.getElementById('search')
let ulItem = document.getElementById('ul-item')
let ulListItems = document.getElementsByTagName('li')

let windowHeight = window.innerHeight


// element load in
for (let x = 0; x < ulListItems.length; x++) {
  ulListItems[x].style.opacity = '0'
  ulListItems[x].style.transition = '.4s'
  ulListItems[x].style.borderBottom = '0 outset var(--acnt-b)'
}

setTimeout(() => {
  let itemLoadCount = 0
  let itemLoadInterval = setInterval(() => {
    if (itemLoadCount === ulListItems.length) {
      for (let x = 0; x < ulListItems.length; x++) {
	ulListItems[x].style.transition = '.2s'
	ulListItems[x].style.borderBottom = '3px outset var(--acnt-b)'
      }
      clearInterval(itemLoadInterval)
    } else {
      ulListItems[itemLoadCount].style.opacity = '100%'
      itemLoadCount += 1
    }
  }, 20)
}, 100)

search.addEventListener('keyup', () => {
  let eventKey = event.key
  for (let x = 0; x < ulListItems.length; x++) {
    let currentSearchValue = search.value.toLowerCase()
    let currentUlItem = ulListItems[x].innerHTML.toLowerCase()
    if (currentUlItem.includes(currentSearchValue)) {
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

