var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  console.log(i + 1 + "." + items[i].textContent);
}
