import React, {useEffect} from "react";
import styled from "styled-components";

import Header from "../components/Header";
import { Grid } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";



const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  useEffect(() => {
    dispatch(postActions.loadPost());
  }, [dispatch])

  return (
    <React.Fragment>
      <Header/>
      {post_list.map((p, idx) => {
        return (
          <Grid padding="16px">
            <Table onClick = {() => {props.history.push("/detail/" + idx)}}>
              <table>
                <tbody>
                  <tr key={idx}>
                    <th  width="100px">{post_list.length - idx}</th>
                    <th  width="300px">{p.name}</th>
                    <th  width="300px">{p.title}</th>
                  </tr>
                </tbody>
              </table>
            </Table>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

const Table = styled.div`
  width: 90%;
  border-bottom: 2px solid #ffdfb9;
  border-collapse: collapse;
  padding: 5px;
  margin: 2px auto;
  margin-bottom: 1rem;
  :hover {
    background-color: lightgray;
  }
`;

export default PostList;
