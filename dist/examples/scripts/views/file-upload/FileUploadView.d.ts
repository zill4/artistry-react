import * as React from 'react';
export interface ITableViewProps {
}
export default class TableView extends React.Component<ITableViewProps, any> {
    select: (files: FileList) => Promise<any>;
    render(): JSX.Element;
}
