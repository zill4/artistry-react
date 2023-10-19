import * as React from 'react';
export interface IDraggableProps {
    item: any;
}
export default class Draggable extends React.Component<IDraggableProps, any> {
    dragging: boolean;
    onDrag: () => void;
    onDragEnd: () => void;
    render(): React.JSX.Element;
}
