import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
import {
  faCheck,
  faXmark,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
        newToDo,
      ];
    });
  };

  const onClickRemove = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Item>
      <span>{text}</span>
      <Icons>
        {category === "TO_DO" ? (
          <button className="check" name="DONE" onClick={onClick}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        ) : (
          <button className="return" name="TO_DO" onClick={onClick}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </button>
        )}
        <button className="delete" onClick={onClickRemove}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </Icons>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 3px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.lightpurple};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkpurple};
  }
`;
const Icons = styled.div`
  button {
    margin-left: 10px;
    color: ${(props) => props.theme.colors.white};
    &:hover {
      font-size: 15px;
      cursor: pointer;
      &.check {
        color: ${(props) => props.theme.colors.black};
      }
      &.return {
        color: ${(props) => props.theme.colors.green};
      }
      &.delete {
        color: ${(props) => props.theme.colors.red};
      }
    }
  }
`;

export default ToDo;
