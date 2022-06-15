import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "Please write a to do" })}
        placeholder="Write a to do"
      />
    </Form>
  );
}

const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
  input {
    width: 100%;
    padding-bottom: 10px;
    border-style: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightpurple};
    text-align: center;
    font-size: ${(props) => props.theme.fonts.size.lg};
    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.colors.darkgray};
    }
  }
`;

export default CreateToDo;
