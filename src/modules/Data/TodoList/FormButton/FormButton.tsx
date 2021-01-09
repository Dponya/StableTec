import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormButtonProps {
    addTodo: (task: React.FormEventHandler) => void;
}

type Inputs = {
    example: string,
};

export const FormButton: React.FC<IFormButtonProps> = ({ addTodo }) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit = (data: SubmitHandler<Record<string, any>>) => addTodo(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input name="example" defaultValue="test" ref={register} />

            <input type="submit" value="send your task" />
        </form>
    );
}