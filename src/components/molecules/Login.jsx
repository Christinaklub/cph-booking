import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';
import Link from 'next/link';
import styles from './Login.module.css'
import { Button } from '@mantine/core';
import { Checkbox } from '@mantine/core';
import loginImg from '/public/loginImg.png'
import Image from 'next/image';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const supabase = createClient('https://txxxtrswrqluxdohetsm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eHh0cnN3cnFsdXhkb2hldHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTE4MjIsImV4cCI6MjAxNTYyNzgyMn0.c5FcVULcw1G-IULur56wxb3wnZZVXz6nkfAmOm1Sipc');

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
        // redirecter dig til booking side når dit login er valideret 
        window.location.href = "/booking";
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
            console.log(data.user.email);
        }
        console.log("data", data);
        console.log("Error", error);


// Denne funksjonen virker ikke fordi den prøver å connecte supabase manuelt som ikke gir noen mening 
            const handleLogin = async () => {
                try {
                
                if (
                    (email === 'cph-nj247@cphbusiness.dk' && password === 'Cph18868') ||
                    (email === 'cph-st255@cphbusiness.dk' && password === 'cph51943')
                ) {
                    // Autentisering vellykket
                    console.log('Innlogging vellykket for autorisert bruker:', email);
                } else {
                    // Feil e-postadresse eller passord
                    console.error('Feil e-postadresse eller passord.');
                }
                } catch (error) {
                console.error('Feil ved indlogging:', error.message);
                }
            };

            // Dette er n funksjonn christina skal fikse men hun må finne ud av ting 
            // const handleLogin = async () => {
            //     try {
            //         let authorized = false;
            
            //         // Sjekk om den innloggede brukeren er en av de autoriserte brukerne
            //         if (
            //             (email === 'cph-nj247@cphbusiness.dk' && password === 'Cph18868') ||
            //             (email === 'cph-st255@cphbusiness.dk' && password === 'cph51943')
            //         ) {
            //             // Setter variabelen til sann hvis innloggingen er fra en autorisert bruker
            //             authorized = true;
            //         }
            
            //         // Hvis innloggingen kommer fra en autorisert bruker, logg inn med Supabase
            //         if (authorized) {
            //             const { data, error } = await supabase.auth.signInWithPassword({
            //                 email: email,
            //                 password: password,
            //             });
            
            //             setIsLoading(false);
            
            //             if (data && data.user) {
            //                 // Gemme brukerinfo i kontekst eller gjøre noe annet
            //                 console.log(data.user.email);
            //             }
            //             console.log("data", data);
            //             console.log("Error", error);
            //         } else {
            //             // Hvis ikke en autorisert bruker, gi en feilmelding eller utfør en passende handling
            //             console.error('Feil e-postadresse eller passord.');
            //         }
            //     } catch (error) {
            //         console.error('Feil ved innlogging:', error.message);
            //     }
            // };
            

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
                
                <input className={styles.margin} type="password" value={password} onChang={handlePasswordChange}

                    // onChange={(event) =>{
                    //     handlePasswordChange(event);
                    //     handleLogin(); 
                    //     }}
                     required placeholder='Adgangskode'/>
            </label>
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