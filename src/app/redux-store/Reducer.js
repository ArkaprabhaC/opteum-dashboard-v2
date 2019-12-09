const initState = {
    width: window.innerWidth,
    mob_selected_tab: 0,
    live_strategy_tracker_items: []
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
    if(action.type === 'ADD_TRACKER_ITEMS'){
        newState = {
            ...oldState,
            live_strategy_tracker_items: [...oldState.live_strategy_tracker_items, action.val]
        }
        newState.live_strategy_tracker_items.forEach((el)=>{
            console.log("live strategy tracker is "+el);

        })
        //console.log("live strategy tracker is "+ newState.live_strategy_tracker_items);
    }
    if(action.type==='REMOVE_TRACKER_ITEM'){
        const newArr = oldState.live_strategy_tracker_items.filter((el)=>{
            let [id] = el; 
            console.log("el id is "+id);
            return el.id !== action.id;
        })
        newState = {
            ...oldState,
            live_strategy_tracker_items: newArr
        }
        console.log("[ATER REMOVAL]live strategy tracker is "+ newState.live_strategy_tracker_items);
    }
    return newState;
}

export default reducer;
