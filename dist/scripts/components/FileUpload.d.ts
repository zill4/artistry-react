import * as React from 'react';
export interface IFileUploadProps {
    id?: string;
    className?: string;
    onSelect: (files: FileList) => Promise<any>;
    value?: string;
    text?: string;
}
export interface IFileUploadState {
    dragging?: boolean;
    uploading?: boolean;
}
export default class FileUpload extends React.Component<IFileUploadProps, IFileUploadState> {
    fileInput: React.RefObject<HTMLInputElement>;
    state: IFileUploadState;
    handleFiles: (files: FileList) => void;
    click: () => void;
    clickStop: (event: React.MouseEvent<HTMLInputElement>) => void;
    select: () => void;
    drop: (event: React.DragEvent<HTMLDivElement>) => void;
    dragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
    dragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
    render(): React.JSX.Element;
}
