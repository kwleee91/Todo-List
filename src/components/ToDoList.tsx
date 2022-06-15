import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, done] = useRecoilValue(toDoSelector);

  return (
    <Container>
      <Title>To Dos</Title>
      <CreateToDo />
      <ToDosWrapper>
        <ToDos>
          <span className="title">To Do</span>
          {toDo?.map((item) => (
            <ToDo key={item.id} {...item} />
          ))}
        </ToDos>
        <ToDos>
          <span className="title">DONE</span>
          {done?.map((item) => (
            <ToDo key={item.id} {...item} />
          ))}
        </ToDos>
      </ToDosWrapper>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: ${(props) => props.theme.fonts.size.xxl};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.lightpurple};
`;

const ToDosWrapper = styled.main`
  max-width: 800px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
`;
const ToDos = styled.article`
  width: 370px;
  min-height: 380px;
  border: 1px solid ${(props) => props.theme.colors.lightpurple};
  border-radius: 15px;
  padding: 15px;
  .title {
    display: block;
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightpurple};
    color: ${(props) => props.theme.colors.lightpurple};
    font-size: ${(props) => props.theme.fonts.size.lg};
  }
`;

export default ToDoList;
