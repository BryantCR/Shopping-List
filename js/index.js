function deleteElement(event){
    alert(event.target);
    let entireElement = event.target.closest('li');
    console.log(entireElement);
    entireElement.remove();
}

let deleteButtons = document.querySelectorAll(".shopping-item-delete")

for(let i = 0; i < deleteButtons.length; i ++){
    deleteButtons[i].addEventListener("click", deleteElement)
}

/*function checkOrUncheck(event){
    alert("clickedd on check")
}*/
/*function checkOrUncheck(element){
    alert(element)
}*/
function checkOrUncheck(element){
    let entireElement = element.closest('li');
    let currentItem = entireElement.querySelector( '.shopping-item' );
    console.log(currentItem);

    if(currentItem.classList.toString().includes( 'shopping-item__checked')){
        currentItem.classList.remove('shopping-item_checked');
    }
    else{
        currentItem.classList.add( 'shopping-item_checked' );
    }
}
