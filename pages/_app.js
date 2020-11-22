import "../styles/global.css";

export function reportWebVitals({ id, name, label, value }) {
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
