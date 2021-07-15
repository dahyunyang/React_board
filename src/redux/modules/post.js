//Actions
const LOAD = "post/LOAD";
const CREATE = "post/CREATE";

const initialState = {
  list: [
    {
      title: "제목입니다",
      name: "글쓴이입니다",
      contents: "내용입니다",
    },
    {
      title: "제목입니다",
      name: "글쓴이입니다",
      contents: "내용입니다",
    },
  ],
};

//Action Creators

export const loadPost = (post) => {
  return {type: LOAD, post};
}


export const createPost = (post) => {
  return {type: CREATE, post};
}


//Reducer

export default function reducer (state = initialState, action= {}){

  switch (action.type) {
    case "post/LOAD": {
      // console.log(state, action)
      // if(action.post.length > 0){
      //   return {list: action.post}
    
      // } //파이어베이스 할 때 사용함
      return state;
    }
    
    case "post/CREATE": {
      const new_post_list = [action.post, ...state.list ];
      return {...state, list: new_post_list};
    }

    default:
      return state;
  }

}

const actionCreators = {
  loadPost,
  createPost,
}

export {actionCreators};