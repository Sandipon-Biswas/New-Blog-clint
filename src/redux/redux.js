const authSlice =({
    name:"nuth",
    initialState:{
        isLogin:false
    },
    reducers:{
        login(state){
            state.isLogin=true
        }
    }
})