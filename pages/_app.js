import "../styles/globals.css";
import "../components/Effects/Lasers/lasers.css";
import "../components/Effects/Lasers/lasers2.css";
import "../components/Effects/Fog/fog.css";
import Layout from '../components/Layout';

// templates
// https://www.tailwindawesome.com/?price=all&type=template&technology=any&order=trending&query=
// https://dev.to/mariann93502220/30-free-tailwind-css-templates-to-kick-start-your-next-project-3igo

function MyApp({ Component, pageProps }) {

    return (

        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}
export default MyApp;
