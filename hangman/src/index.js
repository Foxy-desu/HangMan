import { words } from "./modules/words";
import { elems } from "./modules/dom";
import { initialize } from "./modules/initialize";
import { manageGame } from "./modules/manage-game";

const elements = elems();
initialize(elements);
manageGame(words, elements);
