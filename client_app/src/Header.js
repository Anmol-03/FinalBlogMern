import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// we will not use default a tags instead we will
// use Link 
export default function Header() {
    const [username, setUsername] = useState('null');
    useEffect(() => {  // this will run everytime we mount a component
        fetch('http://localhost:5000/profile', {
            credentials: 'include',

        }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.username);



            });


        });

    }, []);

    function logout() {
        fetch('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',



        });
        setUsername(null);


    }
    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>

            <nav>
                {username && (
                    <>
                        <Link to="/create">Create new Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>

                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}



            </nav>
        </header>



    );
}