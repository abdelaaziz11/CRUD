let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


// get total
function getTotal()
{
    if(price.value != ''){
        let result =( +price.value + +taxes.value + +ads.value ) - +discount.value ;
        total.innerHTML = result ;
        total.style.background = '#040' ;
    }else{
        total.innerHTML ='' ;
        total.style.background = '#a00d02';
    }
}

// create product

 let dataPro;
 if(localStorage.product != null){
 }else{
    dataPro = [];
 }


 submit.onclick = function(){
    let newPro = {
        titlt:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    
    dataPro.push(newPro)
    // save localstorage
    localStorage.setItem('product',    JSON.stringify(dataPro)    )
    clearData()
    showData()
 }

// clear inputs
 
function clearData(){
    title.value = '' ;
    price.value = '' ;
    taxes.value = '' ;
    ads.value = '' ;
    discount.value = '' ;
    total.innerHTML = '' ;
    count.value = '' ;
    category.value = '' ;
} 

// read

function showData()
{
    let table = '';
    for(let i = 0; i < dataPro.length;i++){
        table = `
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].count}</td>
        <td>${dataPro[i].category}</td>
        <td><button id="update">update</td>
        <td><button id="delete">delete</td>
        <tr/>
        `
    }

   document.getElementById('tbody').innerHTML = table;
}
    showData()

// count

// update
// search
// clean data