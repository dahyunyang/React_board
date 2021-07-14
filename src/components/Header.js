import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configureStore";

const Header = () => {
  return (
    <React.Fragment>
      <Grid>
        <Card>
          <Text margin="0px" size="40px" bold>
            게시판 만들기
          </Text>
          <Text margin="0px" size="22px">
            아주 간단한 게시판을 만들어봅시다.
          </Text>
          {/* <button onClick={() => {history.push('/write');}}>글쓰기</button> */}
          <Button
            _onClick={() => {
              history.push("/write");
            }}
            text="글쓰기"
          ></Button>
        </Card>
      </Grid>

      <Grid padding="16px">
        <Table>
          <table >
            <thead>
              <tr>
                <th width="100px">글번호</th>
                <th width="300px" >글쓴이</th>
                <th width="300px">글제목</th>
              </tr>
            </thead>
          </table>
        </Table>
      </Grid>
    </React.Fragment>
  );
};

const Card = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 8px auto;
  padding : 15px;
  box-sizing: border-box;
  background-color: #ffdfb9;
  border-radius: 3px;
`;

const Table = styled.div`
  width: 90%;
  border-bottom: 2px solid #ffdfb9;
  border-collapse: collapse;
  padding: 10px;
  margin: 8px auto;
  margin-bottom: 1rem;
  background-color: #ffdfb9;
`;

export default Header;
