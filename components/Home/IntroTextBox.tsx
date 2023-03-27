import React from "react";
import classes from "../../styles/Home/IntroTestBox.module.css";
import { TextBox } from "../Common/TextBox";

export const IntroTextBox = () => {
    return (
        <TextBox>
            <h2 className={`${classes["header"]}`}>
                <span className={`${classes["header__badge"]}`}>
                    New Comics!
                </span>
                <span className={`${classes["header__title"]}`}>
                    Every Day!
                </span>
            </h2>
        </TextBox>
    );
};