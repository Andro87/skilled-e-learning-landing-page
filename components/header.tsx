import React from "react";
import styles from "./header.module.scss";
import DarkLogo from "../svgs/logo-dark.svg";
import Button from "./button";
const Header: React.FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <DarkLogo />
            <Button color="blue" />
        </header>
    );
};

export default Header;
