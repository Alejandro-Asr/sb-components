
import './mylabel.css';

export interface MyLabelProps {
    /**
     * Contenido del Label
    */
    label            : string;
    /**
     * Tamaño de la etiqueta
    */
    size             : 'normal' | 'h1' | 'h2'| 'h3';
    /**
     * Capitalizar label
     */
     allCaps?        : boolean;
     /**
      * Color label
      */
     color?          : 'primary' | 'secondary' | 'tertiary';
     /**
      * Color personalizado de la fuente
      */
     fontColor? : string;
     /**
      * Color personalizado de la fuente
      */
      backgroundColor? : string;
}

export const MyLabel = ({  
    label     = 'No Label',
    size      = 'normal',
    allCaps   = false,
    color     = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span
            className={ `label ${ size } text-${ color }` }
            style={{ color: fontColor, backgroundColor }}
        > 
            { 
               allCaps ? label.toUpperCase() : label
            }
        </span>
    )
}
