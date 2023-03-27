import React from "react";
import classes from "../../styles/Comics/LoadingMessage.module.css"

export const LoadingMessage = () => {
    return <p className={`${classes["loading-msg"]}`} data-testid="loading">Hold on dawg we are loading these comics...</p>;
};
