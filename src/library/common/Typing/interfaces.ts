export interface ITask {
    id: any;
    task: string
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