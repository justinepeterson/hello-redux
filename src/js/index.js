import store from "./store";
import { addArticle } from "./actions";

// @ts-ignore
window.store = store
// @ts-ignore
window.addArticle = addArticle