 const mealInput = document.getElementById('mealInput') as HTMLInputElement;
 const weekSelector = document.getElementById('weekSelector') as HTMLSelectElement;
 const mealList = document.getElementById('mealList') as HTMLUListElement;
 const mealForm = document.getElementById('mealForm') as HTMLFormElement;


const arrayWeek1: string[] = [];
const arrayWeek2: string[] = [];
const arrayWeek3: string[] = [];
const arrayWeek4: string[] = [];

console.log(weekSelector)

function addMeal(event: Event){
    event.preventDefault();
    const meal = mealInput.value;
    if (mealInput){
        if (weekSelector){
            const week = weekSelector.value.toString();
            switch (week){
                case "week2":
                    arrayWeek2.push(meal);
                    break
                case "week3":
                    arrayWeek3.push(meal);
                    break;
                case "week4":
                    arrayWeek3.push(meal);
                    break
                default:
                    arrayWeek1.push(meal);
            }
        }
        mealInput.value = "";
        update(weekSelector.value);
    }
}

function update(week: string) {
    mealList.innerHTML = "";
    let currentWeek: string[] = [];
    switch (week) {
        case "week2":
            currentWeek = arrayWeek2;
            break;
        case "week3":
            currentWeek = arrayWeek3;
            break;
        case "week4":
            currentWeek = arrayWeek4;
            break;
        default:
            currentWeek = arrayWeek1;
    }

    currentWeek.forEach((meal) => {
        const listItem = document.createElement('li');
        listItem.textContent = meal;
        mealList.appendChild(listItem);
    });
}

function changeWeek() {
    if (weekSelector) {
        update(weekSelector.value);
    }
}

mealForm.addEventListener('submit', addMeal);
weekSelector.addEventListener('change', changeWeek);


