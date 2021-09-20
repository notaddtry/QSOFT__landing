const IconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.header__acc')
let productArray = document.querySelectorAll('.partners_logo')

if (IconMenu) {
  IconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    IconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}

let altProductArray = new Array()
productArray = Array.from(productArray)

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
  console.log(FilteredArray)

  productArray.forEach((product) => {
    product.parentNode.parentNode.parentNode.style.display = 'none'
    for (i = 0; i < FilteredArray.length; i++) {
      if (product.getAttribute('alt') === FilteredArray[i]) {
        product.parentNode.parentNode.parentNode.style.display = 'block'
      }
    }
  })
}
