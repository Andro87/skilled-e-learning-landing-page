import React from "react";
import styles from "./Header.module.scss";
import DarkLogo from "../../svgs/logo-dark.svg";
import { Button } from "components";
export const Header: React.FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <DarkLogo />
            <Button color="blue" />
        </header>
    );
};
