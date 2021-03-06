const headerButton = document.getElementById(`header-button`)
const floatNav = document.getElementById(`header__float-nav`)
const bar1 = document.getElementById(`bar1`), bar2 = document.getElementById(`bar2`), bar3 = document.getElementById(`bar3`)

function displayFloatNav() {
    if(floatNav.style.display == "flex"){
        floatNav.style.display = "none" 
    }else{
        floatNav.style.display = "flex"
    }
}

down = (id) => {
    const arrow = document.getElementById(id)
    const article = document.getElementById(`${String(id).replace(`row`, `ticle`)}`)

    if(arrow.style.transform === `rotate(180deg)`){
        arrow.style.transform = `rotate(0deg)`
        article.style.display = "none"
    }else{
        arrow.style.transform = `rotate(180deg)`
        article.style.display = "flex"
    }
}