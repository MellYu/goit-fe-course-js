const tagsRef = document.querySelectorAll('#categories>li.item');

const nameAndQuantityRef = tagsRef.forEach(tag => {
    console.log(`Категория : ${tag.querySelector('h2').textContent}`);
    console.log(`Количество элементов : ${tag.querySelectorAll('li').length}`);
});