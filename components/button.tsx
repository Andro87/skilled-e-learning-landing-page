import React from "react";
import styles from "./button.module.scss";

interface Props {
    readonly color: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { color } = props;
    return (
        <button
            type="button"
            title=" Get Started"
            className={`${styles.button} ${styles[color]}`}
        >
            Get Started
        </button>
    );
};

export default Button;
