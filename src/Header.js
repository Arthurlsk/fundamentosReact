import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

import { ThemeContext } from './ThemeContext';


export default function Header(props) {
    const {onToggleTheme}= useContext(ThemeContext);
    
    return (

        <>
            <h1>{props.title || 'JStacks Blog'}</h1>
            <Button   onClick={onToggleTheme}>
                Mudar Tema
            </Button>
            {props.children}
            
        </>



    );
}
Header.propTypes={
    title:PropTypes.string,
    children: PropTypes.node.isRequired,
}

Header.defaultProps ={
    title: `JStacks Blog`,
};