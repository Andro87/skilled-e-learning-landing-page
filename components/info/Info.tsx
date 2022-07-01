import React, { ReactNode } from "react";
import styles from "./Info.module.scss";

interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
}
export const Info: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph } = props;
    return (
        <div className={styles.info}>
            {icon}
            <h3> {header}</h3>
            <p>{paragraph}</p>
            <a href="#"> Get Started</a>
        </div>
    );
};
