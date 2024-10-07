// aparecer o home 
view.innerHTML = viewHome()

function display(id) {
    var view = document.getElementById("view");
    // colocar dentro da div view um codigo html gigante

    if (id == 'home') {
        view.innerHTML = viewHome()
    } else if (id == 'ebook') {
        document.getElementById("ebook").className = 'aparecer'
    } else if (id = 'Code Developer') {
        view.innerHTML === viewCodeDeveloper()
    }
}