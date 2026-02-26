
let searchField = document.getElementById('search-field')
let search = document.getElementById('search')
let ulItem = document.getElementById('ul-item')
let ulListItems = document.getElementsByTagName('li')
let ulListItemsA = document.getElementsByTagName('a')

let windowWidth = window.innerWidth


// element load in
let searchFieldCount = 0
let searchFieldInterval = setInterval(() => {
  if (searchFieldCount > 7) {
    clearInterval(searchFieldInterval)
  } else {
    searchField.style.height = `${searchFieldCount}em`
    searchFieldCount += 1
  }
}, 2)

setTimeout(() => {
  ulItem.style.opacity = '100'
}, 200)

setTimeout(() => {
  let itemLoadCount = 0
  let itemLoadInterval = setInterval(() => {
    if (itemLoadCount === ulListItems.length) {
      for (let x = 0; x < ulListItems.length; x++) {
	ulListItems[x].style.transition = '.4s'
	ulListItems[x].style.borderBottom = '3px outset var(--acnt-b)'
      }
      clearInterval(itemLoadInterval)
    } else {
      ulListItems[itemLoadCount].style.opacity = '100%'
      itemLoadCount += 1
    }
  }, 20)
}, 500)

setTimeout(() => {
  if (windowWidth < 1080) {
    search.style.borderTop = '3px outset var(--acnt-a)'
  } else {
    search.style.borderTop = '4px outset var(--acnt-a)'
  }
}, 600)

setTimeout(() => {
  if (windowWidth < 1080) {
    search.style.borderRight = '2px outset var(--acnt-h)'
  } else {
    search.style.borderRight = '3px outset var(--acnt-h)'
  }
}, 700)

setTimeout(() => {
  if (windowWidth < 1080) {
    search.style.backdropFilter = 'blur(9px)'
  } else {
    search.style.backdropFilter = 'blur(7px)'
  }
}, 750)

setTimeout(() => {
  if (windowWidth < 1080) {
    ulItem.style.scrollbarColor = 'var(--acnt-e) var(--clr)'
  } else {
    ulItem.style.scrollbarColor = 'var(--acnt-a) var(--clr)'
  }
}, 2000)

search.addEventListener('keyup', () => {
  let eventKey = event.key
  for (let x = 0; x < ulListItems.length; x++) {
    let currentSearchValue = search.value.toLowerCase()
    let currentUlItem = ulListItemsA[x].innerHTML.toLowerCase()
    if (currentUlItem.includes(currentSearchValue)) {
      ulListItems[x].style.display = 'flex'
      setTimeout(() => {
	ulListItems[x].style.opacity = '100%'
      }, 200)
    } else {
      ulListItems[x].style.opacity = '0'
      setTimeout(() => {
	ulListItems[x].style.display = 'none'
      }, 200)
    }
  }
})

search.addEventListener('dblclick', () => {
  search.value = ''
  for (let x = 0; x < ulListItems.length; x++) {
    ulListItems[x].style.display = 'flex'
    setTimeout(() => {
      ulListItems[x].style.opacity = '100%'
    }, 400)
  }
})

