const initState = {
    width: window.innerWidth,
    mob_selected_tab: 0
}
const reducer = (oldState = initState, action) => {
    //Think later
    let newState = {
        ...oldState
    }
    if(action.type === 'screen_resize'){
       // console.log("resized trigger in reducer, action.val: "+action.val)
        newState={
            ...oldState,
            width: window.innerWidth
        }
    }
    if(action.type === 'mob_nav_change'){
        newState = {
            ...oldState,
            mob_selected_tab: action.val
        }

        //console.log('mob selected tab is '+newState.mob_selected_tab);
    }
    return newState;
}

export default reducer;
