const initState = {

    posts: [
     
        {id:'1',title:'Blog1',body:'Blog 1 içerik'},
        {id:'2',title:'Blog2',body:'Blog 2 içerik'},
        {id:'3',title:'Blog3',body:'Blog 3 içerik'},
        {id:'4',title:'Blog4',body:'Blog 4 içerik'},
        {id:'5',title:'Blog5',body:'Blog 5 içerik'},

    ]
}

const rootReducer =(state=initState,action) => {
    console.log(action);
    if(action.type==="DELETE_POST")
    {
        console.log("delete işleminden önceki liste : " +state.posts);
        let yeniPostListesi = state.posts.filter(post => {
            return post.id !== action.id
        })

        console.log("kalan liste : "+yeniPostListesi);
        return {
            ...state, posts:yeniPostListesi
        }
    }

    return state;
}

export default rootReducer;