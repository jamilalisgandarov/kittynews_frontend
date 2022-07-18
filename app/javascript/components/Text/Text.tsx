import * as React from 'react';
import classnames from 'classnames';
import "./index.scss";
type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | 'caption';

interface TextProps {
    variant?: TextVariant;
    fontWeight?: React.CSSProperties["fontWeight"];
    className?: string;
}

export const Text:React.FC<React.PropsWithChildren<TextProps>> = ({
    variant = 'p',
    className,
    fontWeight,
    children
}) => {
   const Component = React.useMemo(()=>{
       switch (variant) {
            case "h1":
            case "h2":
            case "h3":  
            case "h4":
            case "h5":
            case "h6":
                return variant;
            case "body1":
            case "body2":
                return "p";
           default:
               return "span";
       }
   },[variant]);

  return (
    <Component 
        style={{fontWeight}}
        className={
            classnames( 
                className,
                "typography",
                variant,
            )
        }
        >
            {children}
    </Component>
  )
}
