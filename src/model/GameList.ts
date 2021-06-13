import Game from "./Game";

let gameList = new Array<Game>();
gameList.push(new Game("categlory", "Categlory", "https://cdn.pixabay.com/photo/2017/01/24/03/55/colors-2004497_1280.jpg", "Name as many items as you can in the category before time runs out!", "Entry"));
gameList.push(new Game("addagory", "Add-a-gory", "https://cdn.pixabay.com/photo/2018/05/12/19/20/mosaic-3394375_1280.jpg", "Suggest new categories for future Categlory battles!", "Category"));

// let gameMap = new Map<string, Game>();
// gameMap.set("categlory", new Game("Categlory", "https://cdn.pixabay.com/photo/2017/01/24/03/55/colors-2004497_1280.jpg", "Name as many items as you can in the category before time runs out!", "Entry"));
// gameMap.set("addagory", new Game("Add-a-gory", "https://cdn.pixabay.com/photo/2018/05/12/19/20/mosaic-3394375_1280.jpg", "Suggest new categories for future Categlory battles!", "Category"));


export default gameList;