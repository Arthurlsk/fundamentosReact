import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post(props) {
    
    return (
        <>
            <article>
                <PostHeader 
                
                onRemove={props.onRemove}
                post={{
                   id: props.post.id,
                   title: props.post.title,
                   read: props.post.read,
                }}
                />
                <br></br>
                <small>{props.post.sub}</small>
                <br></br>
                Media: {props.post.likes/ 2}
            </article>
            <br></br>
            
        </>
    );
};


Post.PropTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        sub: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
}