export interface IWatermarkLocale 
{
    getLocale(): string;
    getDescription(): string[];
    getWarning(): string[];
}
export interface IWatermark 
{
    initialize(): void;
    getVersionTag(): string;
    /**
     * Set window title
     */
    setTitle(): void;
    /**
     * Reset console cursor to top
     */
    resetCursor(): void;
    /**
     * Draw the watermark
     */
    draw(): void;
    getVersionLabel(): string;
}
