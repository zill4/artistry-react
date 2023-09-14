import * as React from 'react';
export interface IActionBarProps {
    className?: string;
    id?: string;
    direction?: 'forward' | 'reverse';
    align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    displaySize?: 'default' | 'small' | 'large';
}
export default class ActionBar extends React.Component<IActionBarProps, any> {
    render(): JSX.Element;
}
