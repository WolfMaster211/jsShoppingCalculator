const addButton = document.querySelector('.add-btn');
const foodName = document.querySelector('#item-name');
const foodMoney = document.querySelector('#item-money');
const totalSpan = document.querySelector('.total-money');
const list = document.querySelector('#item-list');
let total = 0;


addButton.addEventListener('click', (event)=> {
    let itemName = foodName.value;
    let itemMoney = parseInt(foodMoney.value);
    total = total + itemMoney;
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li')
    listItem.classList.add('collection-item')
    let text = `Item: ${itemName}  Cost: ${itemMoney}€`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    //clear the input fields
    foodName.value = '';
    foodMoney.value = '';

    console.log('Item:', typeof(itemName));
    console.log('Money:', typeof(itemMoney));
    console.log('Total:', total);

    event.preventDefault(); 
})