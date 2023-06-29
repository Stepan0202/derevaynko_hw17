function generateList(array){
    let ul = document.createElement('ul');

    array.forEach(el => {
        let li = document.createElement('li');
        if(Array.isArray(el)) li.appendChild(generateList(el));
        else li.textContent = el;
        ul.appendChild(li);
        
    });
    return ul;
}
let testArray = [1, [1.1,1.2,1.3, ['1.3.1', '1.3.2',' 1.3.3']], 2,3, [3.1, 3.2, 3.3], 4, 5];
document.body.appendChild(generateList(testArray));