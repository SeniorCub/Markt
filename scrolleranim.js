window.addEventListener("load",()=>{
    let scroller = document.querySelector('.product-display-cont')
    let scrollerchildren = Array.from(scroller.children)

    scrollerchildren.forEach((child)=>{
        let clonedscrollchild = child.cloneNode(true)
        scroller.appendChild(clonedscrollchild)
    })
})