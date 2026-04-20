function addItemToList() {
  let item = document.getElementById("item");
  let list = document.getElementById("itemList");

  list.innerHTML += "<option>" + item.value + "</option>";
  item.value = "";
}

function addUrltoList() {
  let urlTitle = document.getElementById("url-title");
  let url = document.getElementById("url");

  let list = document.getElementById("urlList");

  list.innerHTML += `<option value="${url.value}"> ${urlTitle.value} </option>`;
  urlTitle.value = "";    
  url.value = "";    
}

function visitUrl() {
  let listItem = document.getElementById("urlList").value;

  window.location.href = listItem
}