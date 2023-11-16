import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.links}>
            <div>
                <p className={styles.linkHeader}>Hurtig adgang til</p>
                    <p className={styles.linkText}>• Manuel login</p>
                    <p className={styles.linkText}>• Bibliotek</p>
                    <p className={styles.linkText}>• Selvbetjening</p>
                    <p className={styles.linkText}>• TimeEdit</p>
                    <p className={styles.linkText}>• Webmail</p>
                    <p className={styles.linkText}>• WISEflow</p>
            </div>
            <div>
                <p className={styles.linkHeader}>Læringsværktøjer</p>
                    <p className={styles.linkText}>• LinkedIn Learning</p>
                    <p className={styles.linkText}>• Office365</p>
                    <p className={styles.linkText}>• OneDrive & SharePoint</p>
                    <p className={styles.linkText}>• Padlet</p>
                    <p className={styles.linkText}>• Panopto</p>
                    <p className={styles.linkText}>• Survey-Xact</p>
                    <p className={styles.linkText}>• Zoom</p>
                    <p className={styles.linkText}>• Moodle App</p>
            </div>
            <div>
                <p className={styles.linkHeader}>Specielt for studerende</p>
                    <p className={styles.linkText}>• Information til nye studerende</p>
                    <p className={styles.linkText}>• IT på Cphbusiness</p>
                    <p className={styles.linkText}>• Cphbusiness' iværksttermiljø</p>
                    <p className={styles.linkText}>• Merit</p>
                    <p className={styles.linkText}>• Opslagstavlen</p>
                    <p className={styles.linkText}>• Studenterforeningen</p>
                    <p className={styles.linkText}>• Studierabatter</p>
                    <p className={styles.linkText}>• Studievejledning</p>
                    <p className={styles.linkText}>• SU og SPS</p>
                    <p className={styles.linkText}>• Webshop</p>
            </div>
        </div>

        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook-filled" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" stroke-width="0" fill="currentColor" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube-filled" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" stroke-width="0" fill="currentColor" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
        </div>
    </div>
  )
}
