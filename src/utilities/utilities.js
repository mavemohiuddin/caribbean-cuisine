/* eslint-disable no-unused-vars */
export function hideLabel (e) {
    e.target.parentElement.children[0].classList.add("scale-75");
    e.target.parentElement.children[0].classList.remove("translate-y-1/4");
    e.target.parentElement.children[0].classList.add("-translate-y-1/2");
}
export function showLabel (e) {
    if (document.activeElement != e.target) {
        if (e.target.value.length == 0) {
            e.target.parentElement.children[0].classList.remove("scale-75");
            e.target.parentElement.children[0].classList.remove("-translate-y-1/2");
            e.target.parentElement.children[0].classList.add("translate-y-1/4");
        }
    }
}

export function addToFavorite (recipe) {
    let found = false;
    let savedRecipies = localStorage.getItem("recipies");
    if (savedRecipies == null) {
        let RecipeToSave = [recipe.id];
        let RecipeToSave_string = JSON.stringify(RecipeToSave);
        localStorage.setItem("recipies", RecipeToSave_string);

        return "saved";
    } else {
        let savedRecipies_data = JSON.parse(savedRecipies);
        savedRecipies_data.map(item=>{
            if (parseInt(item) == parseInt(recipe.id)) {
                found = true;
                return "already";
            }
        })
        if (found == false) {
            savedRecipies_data.push(parseInt(recipe.id));
            let savedRecipies_data_string = JSON.stringify(savedRecipies_data);
            localStorage.setItem("recipies", savedRecipies_data_string);
            return "saved";
        }
    }
}