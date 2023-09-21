import * as React from 'react';
export interface IThumbnailProps {
    className?: string;
    id?: string;
    src?: string;
}
export default class Thumbnail extends React.Component<IThumbnailProps, any> {
    render(): React.JSX.Element;
}
