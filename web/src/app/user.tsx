import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Ghost, Github, LogIn, LogOut, Smile } from "lucide-react";
import React from "react";
import SEO from "../components/Seo/Seo";
import { AppPageProps } from "../pages/app/[...]";

import * as styles from "./user.module.scss";

const UserAppPage = ({auth, user}: AppPageProps) => {
    const SignOutClick = () => {
        if(!auth) return;

        auth.signOut();
    }

    const SignInGitHubClick = () => {
        if(!auth) return;

        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider);
    }

    return <div className={styles.userPage}>
        <SEO title={user ? user.displayName : "Sign in"} />
        <div className={styles.header}>
            <div className={styles.picture} style={{backgroundImage: user && user.photoURL ? "url("+user.photoURL+")" : undefined}}>
                {!user && <Ghost />}
                {user && !user.photoURL && <Smile />}
            </div>
            <div className={styles.details}>
                <h1>{user ? user.displayName : "Anonymous"}</h1>
                <span className={styles.uid}>{user ? user.uid : "Sign in to save your progress!"}</span>
            </div>
        </div>

        {
            auth ? <div className={styles.userActions}>
                {
                    user ? <>
                        <button onClick={SignOutClick}><LogOut /> <span>Sign out</span></button>
                    </> : <>
                        <button onClick={SignInGitHubClick}><Github /> <span>Sign in using GitHub</span></button>
                    </>
                }
            </div> : <>
                <span>User management loading...</span>
            </>
        }
        

    </div>
} 

export default UserAppPage;