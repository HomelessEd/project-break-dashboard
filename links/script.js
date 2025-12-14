const linkTitleInput = document.getElementById("linkTitle")
const linkUrlInput = document.getElementById("linkUrl")
const addLinkBtn = document.getElementById("addLinkBtn")
const linksList = document.getElementById("linksList")

let linkArray = []

const addLinkToDOM = (title, url) => {
    const linkItem = document.createElement("div")
    linkItem.classList.add("link-item")

    linkItem.innerHTML = `
        <a href="${url}" target="_blank">${title}</a>
        <button class="delete-btn">Delete</button>
    `

    linksList.appendChild(linkItem)

     const deleteBtn = linkItem.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", () => {
       linkItem.remove()
       linkArray = linkArray.filter(link => !(link.title === title && link.url === url))
       localStorage.setItem("myLinks", JSON.stringify(linkArray))
    })
}




const saveLinks = JSON.parse(localStorage.getItem("myLinks"))

if (saveLinks) {
    linkArray = saveLinks
    linkArray.forEach(link => addLinkToDOM(link.title, link.url))
}


addLinkBtn.addEventListener("click", () => {
    const title = linkTitleInput.value
    let url = linkUrlInput.value   

    if (title === "" || url === "") return

     if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url
    }

    addLinkToDOM(title, url)

   
    linkArray.push({ title, url })

    
    localStorage.setItem("myLinks", JSON.stringify(linkArray))

    linkTitleInput.value = ""
    linkUrlInput.value = ""

    // deleted add link to Dom to see if it is the duplication 

    linkTitleInput.value = ""
    linkUrlInput.value = ""
})

