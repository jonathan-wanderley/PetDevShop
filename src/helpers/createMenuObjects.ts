type Menuoptions = '' | 'all' | 'dog' | 'cat' | 'fish'
;
export const createMenuObject = (activeMenu: Menuoptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}