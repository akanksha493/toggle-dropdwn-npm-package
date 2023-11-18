function toggleDropdownVisibility(dropdownDiv, options){
    dropdownDiv.addEventListener("mouseover",()=>{
        options.classList.add("visible");
    });
    dropdownDiv.addEventListener("mouseout",()=>{
        options.classList.remove("visible");
    });
}

export { toggleDropdownVisibility };