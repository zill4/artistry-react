import * as React from 'react';
export interface IListViewProps {
}
export interface IListViewState {
    searchValue?: string;
    showOptions?: boolean;
    options?: IListData[];
}
interface IListData {
    ingredient: string;
    quantity: string | number;
    unit: string;
}
export default class ListView extends React.Component<IListViewProps, IListViewState> {
    constructor(props: IListViewProps, context: any);
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    onSelectOption: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>, value?: string) => void;
    onSearch: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement>, value?: string) => void;
    onClose: (event: React.SyntheticEvent<HTMLElement>) => void;
    altAction?: (option: string) => any;
    render(): JSX.Element;
}
export {};
