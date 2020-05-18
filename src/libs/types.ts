export interface IContextProps {
    children: React.ReactNode;
}

export interface IAction {
    type: string;
    payload: any;
}