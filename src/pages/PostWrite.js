import React from "react";
import { Grid, Button } from "../elements";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/modules/post";


const PostWrite = (props) => {
  const dispatch = useDispatch();

  const title_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const contents_ref = React.useRef(null);

  const addPost = () => {
    //   가짜 데이터가 어떻게 생겨야 할까? 미리 생김새부터 떠올려봅니다.
    //  1. {} <- 이런 딕셔너리 안에,
    //  2. id, word, desc, example이 들어간다!
    //     - 그럼 생김새는? {id: ~~~, word: ~~~, desc: ~~~, example: ~~~} 이렇게 생겨야죠!
    //  3. 그럼 word, desc, example은 어디에서 가져올까요? -> ref에서 가져와야겠죠!
    //     - useRef를 먼저 잡아주고, input의 ref에 넣어줍니다. 그리고 ref담고 있는 변수명.currect로 가져오면 끝!

    const post = {
      id: 0,
      title: title_ref.current.value,
      name: name_ref.current.value, // input에서 text값에 접근하려면 ~~.value로 접근해요. (word_ref.current가 input이에요.)
      contents: contents_ref.current.value
    };

    dispatch(createPost(post));
    props.history.push('/');

      
  }

    return (
        <React.Fragment>
          <Card>
              <Grid padding="12px 4px">
                <input ref={title_ref} placeholder="제목을 입력하세요" style={{height: "35px", width:"100%"}}></input>
              </Grid>
    
              <Grid padding="12px 4px">
                <input ref={name_ref} placeholder="글쓴이를 입력하세요" style={{height: "35px", width:"100%"}}></input>
              </Grid>
    
              <Grid padding="12px 4px">
                <textarea ref={contents_ref} placeholder="내용을 입력하세요"  style={{ width:"100%"}} rows="6"></textarea>
              </Grid>
    
              <Grid padding="12px 4px">
                <Button
                  _onClick={addPost}
                  text="글쓰기"
                ></Button>
              </Grid>
            </Card>
    
        </React.Fragment>
      );
    }
    const Card = styled.div`
      width: 90%;
      display: flex;
      flex-direction: column;
      margin: 8px auto;
      padding: 15px;
      box-sizing: border-box;
      background-color: #ffdfb9;
      border-radius: 3px;
    `;
    


export default PostWrite;