import { FirebaseApp } from "firebase/app";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

import * as styles from "./Layout.module.scss";

import "../index.scss";
import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth";
import Navigation from "../components/Navigation/Navigation";

type LayoutProps = {
    noLayoutBox?: boolean
    noNavPlaceholder?: boolean
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
    return <AppContext.Consumer>
        {
            (app) => <LayoutWithContext app={app} {...props}/>
        }
    </AppContext.Consumer>
}  

const LayoutWithContext = ({ app, children, noLayoutBox, noNavPlaceholder }: PropsWithChildren<LayoutProps & {app: FirebaseApp}>) => {
    const [user, setUser] = useState<User>(null);
    const [auth, setAuth] = useState<Auth>(null);

    useEffect(() => {
        if(app) {
            const auth = getAuth(app);
            setAuth(auth);
    
            let unsub = onAuthStateChanged(auth, (user) => {
                setUser(user);
            })

            return () => {
                unsub();
            }
        }
    })

    return <div className={styles.layout + (noNavPlaceholder ? "" : " "+styles.navPlaceholder)}>
        <Navigation auth={auth} user={user} />
        
        <main className={noLayoutBox ? undefined : styles.layoutBox}>
            {children}
        </main>
    </div>
}

export default Layout;