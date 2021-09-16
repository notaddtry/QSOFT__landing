const IconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.header__acc')
const productArray = document.querySelectorAll('.partners_logo')
if (IconMenu) {
  IconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    IconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}

let altProductArray = new Array()
productArray.forEach((e) => {
  let altProduct = e.getAttribute('alt')

  altProductArray.push(altProduct)
})
console.log(altProductArray)

let partnersArray = document.querySelectorAll('.partners__content_item')

function change() {
  let search = document.querySelector('.search').value
  const FilterProductArray = (search) => {
    return altProductArray.filter(
      (e) => e.toLowerCase().indexOf(search.toLowerCase()) > -1
    )
  }
  const FilteredArray = FilterProductArray(search)

  for (i = 0; i < altProductArray.length; i++) {
    for (y = 0; y < FilteredArray.length; y++) {
      if (FilteredArray[y] === altProductArray[i]) {
        productArray.forEach((e) => {
          let altProduct = e.getAttribute('alt')

          if (altProduct != altProductArray[i]) {
            //   let parent = e.parentNode.parentNode.parentNode
            //   e.parentNode.parentNode.parentNode.parentNode.removeChild(parent)
          }
        })
      }
    }
  }

  //   productArray.forEach((e) => {
  //     let altProduct = e.getAttribute('alt')
  //     if (altProduct != search) {
  //       parent = e.parentNode.parentNode
  //       console.log(altProduct)
  //       console.log(search)
  //       console.log(parent)
  //       e.parentNode.parentNode.parentNode.removeChild(parent)
  //     }
  //   })
}
