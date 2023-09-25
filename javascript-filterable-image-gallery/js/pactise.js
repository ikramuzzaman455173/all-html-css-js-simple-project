let sideMenu = document.querySelector("#sidebar-menu")
let sidebar = document.querySelector(".sidebar")

//sidebar toggle functionality add
sideMenu.onclick = () => {
  sideMenu.classList.toggle("fa-times")
  sidebar.classList.toggle("active")
}
window.onscroll = () => {
  sideMenu.classList.remove("fa-times")
  sidebar.classList.remove("active")
}

//popUp click images
let popUpImg = document.querySelector(".popup-images")
let imageContainer = document.querySelectorAll(".image-container img")

popUpImg.onclick = () => {
  popUpImg.style.display = "none"
}

for (let img of imageContainer) {
  img.onclick = () => {
    let imgSrc = img.getAttribute("src")
    // console.log({imgSrc});
    popUpImg.style.display = 'flex'
    popUpImg.querySelector("img").src = imgSrc
  }
}

// live search functionalit add
let searchBox = document.querySelector("#search-box")
searchBox.oninput = () => {
  let value = searchBox.value.toLowerCase()
  imageContainer.forEach(img => {
    let dataSearch = img.getAttribute("data-search")
    console.log(dataSearch);
    if (dataSearch.indexOf(value) > -1) img.style.display = "inline-block"
    else img.style.display = "none"
  })
}

// category wise data find

let dataCategory = document.querySelectorAll(".category .btn")

for (let btn of dataCategory) {
  let categoryData=btn.getAttribute("data-category")
  btn.onclick = () => {
    searchBox.value=""
    for (let remove of dataCategory) {
      remove.classList.remove("active")
    }
    for (let img of imageContainer) {
      let dataCat = img.getAttribute("data-cat")
      // console.log({dataCat});
      if (categoryData == 'all') img.style.display = 'inline-block'
      else if (categoryData == dataCat) img.style.display = 'inline-block'
      else img.style.display='none'
    }
    btn.classList.add("active")
  }
}


// type wise data find
let dataType = document.querySelectorAll(".type .btn")

dataType.forEach(btn => {
  let typeData=btn.getAttribute("data-type")
  btn.onclick = () => {
    searchBox.value=""
    dataType.forEach(remove => {
      remove.classList.remove("active")
    })
    imageContainer.forEach(img => {
      let typeImg = img.getAttribute("src").split(".").pop()
      // console.log({typeImg,typeData});
      if (typeData == 'all') img.style.display = "inline-block"
      else if (typeData == typeImg) img.style.display ="inline-block"
      else img.style.display="none"
    })
    btn.classList.add("active")
  }
})