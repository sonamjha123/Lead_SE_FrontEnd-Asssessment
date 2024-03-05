Please create a small SPA application. Framework: react or vue. Builder: vue-cli, webpack, vite of your choice.

You need two pages. 
Pages must have their own route. When you enter the page address in the URL, it should open correctly.

1. Dashboard page (/)
2. List of loading elements (/list)
 
There are also 2 more components on the dashboard page:
   1. Button to go to the list page (/list).
   2. List of items (favorites) saved in the application state.
 
* When moving from the dashboard page to the list page, the list of elements from: "https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10" is loaded. When you scroll down, the list loads automatically.
* Each element displays id, title, image, add to favorites button (changes state if already in favorites)
* The list page has its own “back” button to return to the dashboard (/). When we press the back button, we return to the dashboard and see the updated data (favorites). If we go to the list again, the list is in the state in which the list was the last time we visited (if we already went to it and scrolled). Elements retain their state and, upon further scrolling down, continue to be loaded, taking into account those already loaded.
 
Design doesn't matter. Just carefully arrange the styles to your taste. The styles themselves should be written in SCSS.
 
It will be a plus if the task is written in TS and covered with some tests.
 
At the end, commit it to any public repository (GitHub for example) and send a link to us.
