import React, { useState} from 'react';
import {ThemeProvider} from './ThemeContext'



import Post from './Post';
import Header from './Header';





function App() {
    




    const [posts, setPosts]= useState([

        { id: Math.random(),title: 'Title#01', sub: 'Sub#01', likes: 20,read: false },
        { id: Math.random(),title: 'Title#02', sub: 'Sub#02', likes: 10,read: true },
        { id: Math.random(),title: 'Title#03', sub: 'Sub#03', likes: 50,read: false },
        { id: Math.random(),title: 'Title#04', sub: 'Sub#04', likes: 50,read: false },
        
    ]);

    


    function handleRefresh(){

        
        
       setPosts((prevState) => [
        ...prevState, 
        {
            id: Math.random(),
             title: `Title#0${prevState.length + 1}`,
             sub: `Sub#0${prevState.length + 1}`,
            likes: 50,
         },
    
    
    ]);
       
    }
    function handleRemovePost(postId){
        setPosts((prevState) => (
        prevState.filter(post=> post.id !== postId)
        ));
    }
    return (
        <ThemeProvider>
            <Header>
                <h2>Posts da semana</h2>
                <button onClick={handleRefresh}>Atualizar</button>
            </Header>

            <hr></hr>
        {posts.map(post =>(
            <Post 
            key={post.id}
            likes={post.likes}
            onRemove={handleRemovePost}
            post={post}
            
            />  
        ))}
        </ThemeProvider>
    );
};

export default App;