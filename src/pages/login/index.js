import React from 'react'
import { Image } from '@mantine/core';
import styles from './index.module.css'
import { Button } from '@mantine/core';
import Link from 'next/link';
import { Input } from '@mantine/core';
import { Checkbox } from '@mantine/core';

export default function Login() {
  return (
    <div className={styles.container} >
        <Image className={styles.image}
        radius="md"
        fit="contain"
        src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
        /> 

        <div className={styles.login}>
            <p className={styles.headerTwo}>EFIF</p>
            <p className={styles.bodyText}>Log på</p>

            <Input className={styles.margin} type="mail" placeholder="nogen@example.com" />
            <Input className={styles.margin} placeholder="Adgangskode" />

            <Checkbox className={styles.margin}
            defaultChecked
            label="Log mig ikke af"
            />
            
            <div className={styles.buttons}>
              <Link href="/">
                <Button variant="filled">Log på</Button>
              </Link>
            </div>

            <p className={styles.bodyText}>Du får adgang gennem din uddannelsesinstitution ved at bruge det brugernavn og password som du plejer at bruge til institutionens systemer.</p>
    
        </div> 
    </div>
  )
}




