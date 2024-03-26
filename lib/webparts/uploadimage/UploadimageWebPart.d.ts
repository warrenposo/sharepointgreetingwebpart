import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IUploadimageWebPartProps {
    description: string;
}
export default class UploadimageWebPart extends BaseClientSideWebPart<IUploadimageWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    render(): void;
    protected onInit(): Promise<void>;
    private _getEnvironmentMessage;
}
//# sourceMappingURL=UploadimageWebPart.d.ts.map