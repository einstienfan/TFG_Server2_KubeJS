// priority 0
"use strict";

const registerMCAItemTags = (event) => {

    // Hide disabled items
    global.MCA_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}