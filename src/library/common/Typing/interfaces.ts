import { SubmitHandler } from 'react-hook-form';

export interface ITask {
    id: any;
    filteredTask: string
}

export interface ISpecialList {
    id: any;
    name: string;
    lvl: string;
    active: boolean;
}

export interface ISpecialTextImage {
    img: any;
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