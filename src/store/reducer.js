const initialState = getCountries();

function getCountries(){
    if(window.localStorage.getItem('countries')){
        return JSON.parse(window.localStorage.getItem("countries"));
    }
    else{
        return {}
    }
}

const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case 'ADDCOUNTRIES':
            return {...state,countries:[...state.countries,payload.country]}
        case 'UPDATECOUNTRIES':
            return {...state,countries:payload.countries}
        default:
            return state;
    }
}
export default reducer;
