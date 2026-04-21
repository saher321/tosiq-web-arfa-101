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

    if (selectedStatus == ""){
        renderCategories(productCategories)
    } else {
        const filtertedData = productCategories.filter((category) => category.status == selectedStatus)

        renderCategories(filtertedData)
    }
}