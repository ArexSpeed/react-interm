import React from "react";
import "./style.css";
import { ReactQueryConfigProvider } from "react-query";
import { PokemonPager } from "./Pokemon";

const queryConfig = {
  suspense: true
};

export default function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <React.Suspense fallback={"loading..."}>
        <PokemonPager />
      </React.Suspense>
    </ReactQueryConfigProvider>
  );
}
