//priority 0
"use strict";

const registerWEATHER2Tags = (event) => {

    global.WEATHER2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

}