import { useState } from "react";
import "../styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import DefaultLayout from "../components/layout/DefaultLayout";
import { MyContext } from "@/context/my-context";

// import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";

  export default function App({ Component, pageProps }) {
    const [campus, setCampus] = useState("");
    const [stilling, setStilling] = useState("");
    const [lokale, setLokale] = useState("");
    const [tidspunkt, setTidspunkt] = useState("");
    const [dato, setDato] = useState("");

  const contextValue = {
    campus,
    setCampus,
    stilling,
    setStilling,
    lokale,
    setLokale,
    tidspunkt,
    setTidspunkt,
    dato,
    setDato,
  };
  

  // til database
  // const { error } = await supabase.from('bookingAvailable').insert(contextValue)
  //  if (error){
  //   throw error;
  //   }catch (error){}

  return (
    <MyContext.Provider value={contextValue}>
      <MantineProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </MantineProvider>
    </MyContext.Provider>
   
  );
}
