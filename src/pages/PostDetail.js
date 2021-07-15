import React, {useEffect} from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostDetail = (props) => {
  const post_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();
  let post_index = parseInt(props.match.params.idx);

  useEffect(() => {
    dispatch(postActions.loadPost());
  }, [dispatch])

  console.log(post_list);
  console.log(post_index);

  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Card>
          <h1>{post_list[post_index].title}</h1>
          <h2>{post_list[post_index].name}</h2>
        <CommentArea>{post_list[post_index].contents}</CommentArea>
        <Button _onClick = {() => props.history.push("/")}text = "돌아가기"/>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

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

const CommentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: columm;
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: lightgray;
  border-radius: 10px;
`;

export default PostDetail;
