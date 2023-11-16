import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import DefaultLayout from "@/components/layout/DefaultLayout";


export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </MantineProvider>
  );
}
