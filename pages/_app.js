import {Analytics} from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "../components/dev";

function MyApp({Component, pageProps}) {
    return (
        <>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
            <Analytics/>
        </>
    );
}

export default MyApp;
