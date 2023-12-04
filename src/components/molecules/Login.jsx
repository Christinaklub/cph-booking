import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';
import Link from 'next/link';
import styles from './Login.module.css'
import { Button } from '@mantine/core';
import { Checkbox } from '@mantine/core';
import loginImg from '/public/loginImg.png'
import Image from 'next/image';

// Her bruger vi useState for de bruger der skal kunne logge ind på bookingsystemet 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [ loginError, setError] = useState (false);

    // Tar fatt i vores supabase for å se hvilke autentication log ind der må komme igjennom 
    const supabase = createClient('https://txxxtrswrqluxdohetsm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eHh0cnN3cnFsdXhkb2hldHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTE4MjIsImV4cCI6MjAxNTYyNzgyMn0.c5FcVULcw1G-IULur56wxb3wnZZVXz6nkfAmOm1Sipc');

    // Dette er en funksjon som skal configurere hvilke bruger der kan logge ind, og viser feil hvis en annen bruger der ikke har tilgang til å logge ind 
    const handleLogin = async () => {
            let authorized = false;
            setError(false);

                //henter info fra databasen
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
                });
                console.log (error, data);
                setIsLoading(false);
    
                if (data && data.user) {
                    // Gemme brukerinfo i kontekst og kommer videre til booking siden
                    console.log(data.user.email);
                    window.location.href = "/booking";
                } else {
                    setError(true);
                }
                console.log("data", data);
                console.log("Error", error);
    }

    // Denne funksjonen her er en event som endrer seg ved en hendelse, setEmail funskjonen (linje 12) blir kalt hver gang funksjone i input opdaterer seg 
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Denne fuksjonen er til hvis passordet og email er riktig
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log('Logger ind med', email, password);
        handleLogin ();
        // redirecter dig til booking side når dit login er valideret 
    }

    return (
        <div className={styles.container} >
        <Image className={styles.image} src={loginImg}/> 
        <form onSubmit={handleSubmit} className={styles.login}>
            <p className={styles.headerTwo}>EFIF</p>
            <p className={styles.bodyText}>Log på</p>
    
            { isLoading && <h2>Loader...</h2> }
            <label>
                <input className={styles.margin} type="email" value={email} onChange={handleEmailChange} required placeholder='Email' />
            </label>
            <br />
            <label> 
                
                <input className={styles.margin} type="password" value={password} 
                    onChange={handlePasswordChange} required placeholder='Adgangskode'/>
            </label>
            {/* condistinal rendering på p tag, dette blir vist når login error er true ellers er den bare satt til false*/}
            {loginError && <p className={styles.loginError}>Forkert indlogging</p>}
            <br />

            <Checkbox className={styles.logOff}
            defaultChecked
            label="Log mig ikke af"
            />
            
            <input variant="filled" disabled={isLoading} type="submit" value="Log in" className={styles.logIn}/>

            <p>
            Du får adgang gennem din uddannelsesinstitution ved at bruge det brugernavn og password som du plejer at bruge til institutionens systemer.
            </p>
        </form>
        </div>
    );
}

export default Login;