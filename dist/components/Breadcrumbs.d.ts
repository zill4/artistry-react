import * as React from 'react';
export interface IBreadcrumbs {
    id?: string;
    className?: string;
    children?: React.ReactNode;
}
export default class Breadcrumbs extends React.Component<IBreadcrumbs, any> {
    render(): JSX.Element;
}
