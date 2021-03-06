import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

interface TestProps {
    readonly done: boolean;
}

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 25px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div<TestProps>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        `
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `}
`;

const Text = styled.div<TestProps>`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        `
            color: #ced4da;
        `}
`;

interface TodoItemProps {
    id: number;
    done: boolean;
    text: string;
}

function TodoItem({ id, done, text }: TodoItemProps) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;
