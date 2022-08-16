import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import cn from "classnames";

const style = {
    defaulStyle: `bg-primary text-white transition-[all_0.4s_ease_0s]`,
    primaryHoverStyle: `hover:border-primary hover:bg-primary hover:text-white`,
    darkHoverStyle: `hover:border-black hover:bg-black hover:text-white`,
};

const sizeStyle = {
    sm: `p-[11px_28px] lg:p-[13px_30px]`,
    md: `p-[16px_24px] sm:p-[16px_34px] md:p-[20px_40px]`,
    lg: `p-[22px_44px]`,
    xl: ``,
};
const shapeStyle = {
    rounded: `rounded-none`,
    rounded2: `rounded-[2px]`,
    rounded5: `rounded-[5px]`,
    roundedmd: `rounded-[30px]`,
    roundedlg: `rounded-[40px]`,
    roundedfull: `rounded-full`,
};
const colorStyle = {
    primary: `bg-primary text-white`,
    secondary: `bg-secondary text-white`,
    transparent: `bg-transparent`,
    light: `bg-white text-black`,
    dark: `bg-black text-white`,
};
const outlineStyle = {
    none: `border-none`,
    primary: `border-primary border text-primary`,
    light: `border-white border text-white`,
    dark: `border-black border text-black`,
};
const hoverStyle = {
    hoverPrimary: `${style.primaryHoverStyle}`,
    hoverDark: `${style.darkHoverStyle}`,
};

const Button = ({
    children,
    type,
    path,
    className,
    size,
    shape,
    color,
    outline,
    hover,
}) => {
    const btnstyle = {
        size: size || "md",
        shape: shape || "rounded",
        color: color || "primary",
        outline: outline || "none",
        hover: hover || "hoverPrimary",
    };

    const buttonClasses = cn(
        className,
        `inline-block text-center overflow-hidden z-[1] relative transition-[all_0.4s_ease_0s] uppercase ${style.defaulStyle}`,
        sizeStyle[btnstyle["size"]],
        shapeStyle[btnstyle["shape"]],
        colorStyle[btnstyle["color"]],
        outlineStyle[btnstyle["outline"]],
        hoverStyle[btnstyle["hover"]]
    );

    // if (path) {
    //     const internal = /^\/(?!\/)/.test(path);
    //     const isHash = path.startsWith("#");

    //     if (internal) {
    //         return (
    //             <Link to={path} className={buttonClasses}>
    //                 {children}
    //             </Link>
    //         );
    //     }
    //     if (isHash) {
    //         return (
    //             <button href={path} className={buttonClasses}>
    //                 {children}
    //             </button>
    //         );
    //     }
    //     return (
    //         <a
    //             href={path}
    //             target="_blank"
    //             className={buttonClasses}
    //             rel="noopener noreferrer"
    //         >
    //             {children}
    //         </a>
    //     );
    // }

    return (

        // <button style={size} type={type} className={buttonClasses}>
        //     {children}
        // </button>

        <button type={type} className={buttonClasses}>
            {children}
        </button>

    );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    path: PropTypes.string,
    size: PropTypes.oneOf(["xm", "sm", "md", "lg", "xl"]),
    shape: PropTypes.oneOf([
        "rounded",
        "rounded2",
        "rounded5",
        "roundedmd",
        "roundedlg",
        "roundedfull",
    ]),
    outline: PropTypes.oneOf(["primary", "light", "dark", "none"]),
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "transparent",
        "dark",
        "light",
        "warning",
    ]),
    hover: PropTypes.oneOf(["hoverPrimary", "hoverDark"]),
    path: PropTypes.string,
};
Button.defaultProps = {
    type: "button",
};
export default Button;
