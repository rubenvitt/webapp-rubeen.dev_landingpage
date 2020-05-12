import React from "react";
import styles from './SourceCodeInfo.module.css';
import ReactLogo from './icons8-gitlab.svg';

function SourceCodeInfo () {
    const redirect = () => document.location.href = 'https://gitlab.rubeen.dev/rubeen/rubeen.dev-landing-page';

    return (
        <div onClick={redirect} className={styles.main}>
            <p><img draggable={"false"} src={ReactLogo} height={'50'} alt={'Gitlab Logo'} /></p>
            <p>I'm hosted on Gitlab</p>
        </div>
    )
}

export default SourceCodeInfo;
