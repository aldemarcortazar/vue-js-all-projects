
//para hacer cambios en el state
export const increment = ( state, val ) =>{
    console.log(val)
    state.count += val;
    state.lastMutation = 'increment';
};
export const setLoading = ( state ) => {
    state.isLoading = !state.isLoading
}