import { useState } from 'react';

export const useArray = (initialList: any) => {
    const [list, setList] = useState(initialList);

    return {
        list,
        addItem: (newItemText: string) => {
            setList([
                ...list,
                {
                    id: list.length + 1,
                    text: newItemText,
                    completed: false
                }
            ]);
        },
        removeItem: (itemId: number) => {
            const updatedItems = list.filter((item: { id: number; }) => item.id !== itemId);
            setList(updatedItems);
        },
        toggleItem: (itemId: number) => {
            const updatedItems = list.map((item: { id: number; completed: boolean; }) => {
                return item.id === itemId
                    ? { ...item, completed: !item.completed }
                    : item;
            });
            setList(updatedItems);
        }
    };
}