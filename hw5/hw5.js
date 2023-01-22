// 1. Таблица с `id="age-table"`.
let ageTable = document.getElementById("age-table");
console.log(ageTable);

// 2. Все label в этой таблице
labelTags = labelTags.getElementsByTagName("label");
console.log(labelTags);

// 3. Первый td в этой таблице
table.rows[0].cells[0];
// или
table.getElementsByTagName("td")[0];
// или
table.querySelector("td");
console.log(labelTags);

// 4. Форма с name="search"
// предполагаем, что есть только один элемент с таким name в документе
let form = document.getElementsByName("search")[0];
// или, именно форма:
document.querySelector('form[name="search"]');

// 5. Первый input в этой форме
form.getElementsByTagName("input")[0];
// или
form.querySelector("input");

// 6. Последний input в этой форме
let inputs = form.querySelectorAll("input"); // найти все input
inputs[inputs.length - 1]; // взять последний
