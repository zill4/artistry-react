import * as React from 'react';
export interface ISortableProps {
    items: any[];
}
export default class Sortable extends React.Component<ISortableProps, any> {
    render(): JSX.Element;
}
