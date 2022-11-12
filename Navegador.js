
async function getCategories(){
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)



    let dessetCat = data.categories[2];
    console.log(dessetCat);
    let listMealURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood" + dessetCat.strCategory
    console.log(listMealURL)

    let mealResponse = await fetch(listMealURL);
    let mealList = await mealResponse.json();
    console.log(mealList);

    for(let i=0 ; i<mealList.meals.length ; i++){
        let id = mealList.meals[i].idMeal
        let detailURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52819"+
        console.log(detailURL);
    }
}
async function getMealDetails(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
}


getCategories();
