import React from "react";
import styles from "./footer.module.scss";
import LightLogo from "../svgs/logo-light.svg";
import Button from "./button";

const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <LightLogo />
                <Button color="light_pink" />
            </div>
        </footer>
    );
};

export default Footer;
