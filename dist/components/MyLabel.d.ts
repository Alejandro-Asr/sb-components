/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Contenido del Label
    */
    label: string;
    /**
     * Tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizar label
     */
    allCaps?: boolean;
    /**
     * Color label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color personalizado de la fuente
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
