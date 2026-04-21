loopsarrays();
function loopsarrays(){
    
    const productCategories = [
        {id: 1021, name: "Wearing"},
        {id: 6432, name: "Food"},
        {id: 1053, name: "Electornics"},
    ];

    // for(let i = 0; i <= productCategories.length; i++){
    //     console.log(productCategories[i].id , productCategories[i].name)
    // }

    productCategories.map((category)=> {
        console.log(category.id, category.name)
    })

}

const productCategories = [
    {id: 1021, name: "Wearing", status: "Inactive"},
    {id: 6432, name: "Food", status: "Active"},
    {id: 1053, name: "Electornics", status: "Active"},
];

renderCategories(productCategories)

function renderCategories(productCategories) {
    let tbody = document.getElementById("pCategories");

    productCategories.map((category) => {
        tbody.innerHTML += `
        <tr> 
            <td> ${category.id} </td> 
            <td> ${category.name} </td> 
            <td> ${category.status} </td> 
        </tr>
        `
    })
}

function getStatus(){
    let selectedStatus = document.getElementById("status").value;
    
    let tbody = document.getElementById("pCategories");
    tbody.innerHTML = "";

    if (selectedStatus == ""){
        renderCategories(productCategories)
    } else {
        const filtertedData = productCategories.filter((category) => category.status == selectedStatus)

        renderCategories(filtertedData)
    }
}

const sample =  [ 24, "Ali", "C", "Company information", "A", "e", 753, "Usman" ]

const numbers = [];
const words = [];
const letters = [];

sample.map((item) => {
    if (typeof item == 'number'){
        numbers.push(item);
    } else if(typeof item == 'string' && item.length > 1 ){
        words.push(item)
    } else {
        letters.push(item)
    }
})

console.log(numbers, words, letters)