import { FirebaseApp } from "firebase/app";
import React, {createContext} from "react";

export const AppContext = createContext<FirebaseApp>(null);