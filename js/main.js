let navbar = document.querySelector("#navbar");
let closeNav = document.querySelector("#closeNav");
let openNav = document.querySelector("#openNav");
let allPages = document.querySelector("#allPages");

let li = document.querySelectorAll("li");
let paginationBtns = document.querySelectorAll(".paginationBtns");

li.forEach((items, index)=>{
    items.addEventListener("click" , ()=>{
        li.forEach(remove=>{
            remove.classList.remove("active");
        })
        paginationBtns.forEach(pag_remove=>{
            pag_remove.classList.remove("activePagination");
        })
        paginationBtns[index].classList.add("activePagination");
        allPages.style.left = -(index * 100) + 'vw';
        items.classList.add("active");
    })
})

openNav.addEventListener("click" ,()=>{
    navbar.style.display = "block";
})

closeNav.addEventListener("click" ,()=>{
    navbar.style.display = "none";
})

paginationBtns.forEach((pag_items, pag_index)=>{
pag_items.addEventListener("click" , ()=>{
        paginationBtns.forEach(pag_remove=>{
            pag_remove.classList.remove("activePagination");
        })
        li.forEach(remove=>{
            remove.classList.remove("active");
        })
        li[pag_index].classList.add("active");
        allPages.style.left = -(pag_index * 100) + 'vw';
        pag_items.classList.add("activePagination");
    })
})

// link Pagination Buttons With Navbar Lists
