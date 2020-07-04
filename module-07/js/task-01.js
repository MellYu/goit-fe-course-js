const tagsRef = document.querySelectorAll('#categories>li.item');

const nameAndQuantityRef = tagsRef.forEach(tag => {
    const title = tag.querySelector('h2');
    console.log(`Категория : ${title.textContent}`);
    const quantity = tag.querySelectorAll('li');
    console.log(`Количество элементов : ${quantity.length}`);
});