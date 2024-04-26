document.addEventListener('DOMContentLoaded', function () {
    const categoriesList = document.getElementById('categories');
    const categoryItems = categoriesList.querySelectorAll('.item');
  
    console.log(`Number of categories: ${categoryItems.length}`);
  
    categoryItems.forEach(category => {
        const header = category.querySelector('h2').textContent;
        const items = category.querySelectorAll('ul li');

        console.log(`Category: ${header}`);
        console.log(`Elements: ${items.length}`);
    });
});
