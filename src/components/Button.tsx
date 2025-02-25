import React from "react";
import styles from "./Button.module.css";

interface Buttonprops {
  label: string,
  variant?:string,
  disabled?:boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>
  className?: string; // Explicitly define className as optional
  style?: React.CSSProperties; // Explicitly define style as optional
}

const Button = ({
  label,
  onClick,
  className,
  variant = "primary", // default to primary if not specified
  disabled = false,
  style
}: Buttonprops) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ""}`;

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled} style={style}>
      {label}
    </button>
  );
};

export default Button;
