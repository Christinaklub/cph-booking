import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const supabaseUrl= process.env.SUPABASE_URL
    const supabaseKey= process.env.SUPABASE_KEY

    const supabase = createClient (supabaseUrl, supabaseUrl)

    // const supabase = createClient('https://txxxtrswrqluxdohetsm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eHh0cnN3cnFsdXhkb2hldHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTE4MjIsImV4cCI6MjAxNTYyNzgyMn0.c5FcVULcw1G-IULur56wxb3wnZZVXz6nkfAmOm1Sipc');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        // Here you can call your signup API or method
        console.log('Logger ind med', email, password);
        loginNewUser();
    }

    async function loginNewUser() {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        //   options: {
        //     redirectTo: 'https//example.com/welcome'
        //   }
        })
        setIsLoading(false);

        if (data && data.user) {
            // Gemme user info i context.
            console.log("Successful login, email is", data.user.email);
        }
        console.log("data", data);
        console.log("Error", error);

      }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Log ind</h1>
            { isLoading && <h2>Loader...</h2> }
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} required />
            </label>
            <br />
            <label>
                Passord:
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <br />
            <button disabled={isLoading} type="submit">Log ind</button>
        </form>
    );
}

export default Login;