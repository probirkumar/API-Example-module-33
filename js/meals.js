// console.log('meals')
const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card" >
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchingFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log('searching', searchText)
    loadMeals(searchText);
    searchField.value = '';
}

const loadMealDetail = (idMeal) => {
    // console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (idMeal) => {
    console.log(idMeal)
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
        <img src="${idMeal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${idMeal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
        </div>
    `;
    detailContainer.appendChild(detailDiv);
}


loadMeals('');