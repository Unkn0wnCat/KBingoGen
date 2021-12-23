import { userSetter } from "core-js/fn/symbol";
import { Auth, User } from "firebase/auth";
import { Link } from "gatsby";
import React, { PropsWithoutRef } from "react";
import {Ghost, LogIn, Smile} from "lucide-react";

import * as styles from "./Navigation.module.scss";

type NavigationProps = {
    auth?: Auth|null,
    user?: User|null
}

const Navigation = (props: NavigationProps) => {
    return <div className={styles.navigation}>
        <nav>
            <Link to={"/"}>KBingoGen</Link>

            <Link to={"/app/user"} aria-label="User Menu" className={styles.userMenuBtn}>
                <div style={{backgroundImage: props.user && props.user.photoURL ? "url("+props.user.photoURL+")" : undefined}}>
                    {!props.user && <Ghost />}
                    {props.user && !props.user.photoURL && <Smile />}
                </div>
            </Link>
        </nav>
    </div>
}

export default Navigation;