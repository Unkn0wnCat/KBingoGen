import React, { useEffect, useState } from "react"
import { Router, RouteComponentProps } from "@reach/router"
import Layout from "../../layout/Layout"
import NotFoundComponent from "../../components/NotFound/NotFound";
import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth";
import { PageProps } from "gatsby";
import { FirebaseApp } from "firebase/app";
import { AppContext } from "../../context/AppContext";
import UserAppPage from "../../app/user";

let NotFound = (props: RouteComponentProps) => <NotFoundComponent/>

export type AppPageProps = RouteComponentProps<{
    app: FirebaseApp,
    auth: Auth|null,
    user: User|null,
}>;

const App = (props: PageProps) => {
    return <AppContext.Consumer>
        {
            (app) => <AppWithContext app={app} {...props}/>
        }
    </AppContext.Consumer>
}  

const AppWithContext = ({app}: PageProps & {app: FirebaseApp}) => {
    const [user, setUser] = useState<User>(null);
    const [auth, setAuth] = useState<Auth>(null);

    const propPack = {
        app,
        user,
        auth
    }

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

  return (
    <Layout>
      <Router basepath="/app">
        <UserAppPage path="/user" {...propPack} />
        <NotFound default />
      </Router>
    </Layout>
  )
}
export default App