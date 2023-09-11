import { BrowserView, MobileView } from "react-device-detect"
import BackgroundContainer from "../components/BackgroundContainer"
import { Bio } from "./web/bio"
import { BioMobile } from "./mobile/bio"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const App = () => {

    const firebaseConfig = {
        apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
        authDomain: "bio-eml.firebaseapp.com",
        projectId: "bio-eml",
        storageBucket: "bio-eml.appspot.com",
        messagingSenderId: "392274280098",
        appId: "1:392274280098:web:8c95deb8096b77a26e61fb",
        measurementId: "G-FNK5E6TKSK"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);

    return (
        <>
            <BrowserView>
                <BackgroundContainer device={'browser'}>
                    <Bio />
                </BackgroundContainer>
            </BrowserView>
            <MobileView>
                <BackgroundContainer device={'mobile'}>
                    <BioMobile />
                </BackgroundContainer>
            </MobileView>
        </>
    )
}

export default App