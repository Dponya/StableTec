import { SubmitHandler } from 'react-hook-form';

export interface ITask {
    id: number | string;
    filteredTask: string
}

export interface ISpecialList {
    id: string;
    name: string;
    lvl: string;
    active: boolean;
}

export interface ISpecialTextImage {
    img: string;
    text: string
}

export interface ICurrentImgTextId {
    img: string;
    textId: number;
}

export interface ICurrentItem {
    img: string;
}

export interface IAudio {
    pause: () => void,
    play: () => void
}