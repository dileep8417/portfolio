import React from "react";

type stypeType = {
    [key: string]: React.CSSProperties,
};

const styles: stypeType = {
    logo: {
        fontSize: '42px',
        fontWeight: '700',
    },
    
    highlight: {
        color: 'var(--primary-color)',
    }
};

const Logo = function () {
    return <div className="logo" style={styles.logo}><span style={styles.highlight}>d</span>A</div>;
}

export default Logo;