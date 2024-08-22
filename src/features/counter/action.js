
export const addwidget =(name, text , id)=>({
    type:"ADD_WIDGET",
    payload:{name, text, id}
});
export const removewidget =(id , elid)=>({
    type:"REMOVE_WIDGET",
    payload:{id, elid}

})