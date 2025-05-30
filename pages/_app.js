import "@/app/globals.css";
import Navigation from "@/app/components/Navigation";

// This _app.js allows for dynamic routing
// Takes the components and any pageprops as arguments

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* Show the navigation on every page */}
      <Navigation></Navigation>
      {/* Show the current component/page */}
      <Component {...pageProps} />
    </>
  );
}
