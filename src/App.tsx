import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavigationComp from "./components/Navigation";
import HomeView from "./views/Home/HomeView";
import CharactersView from "./views/Characters/CharactersView";
import CharacterView from "./views/Characters/CharacterView";
import EpisodesView from "./views/Episodes/EpisodesView";
import EpisodeView from "./views/Episodes/EpisodeView";
import LocationsView from "./views/Locations/LocationsView";
import LocationView from "./views/Locations/LocationView";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container fluid className="container">
        <BrowserRouter>
          <NavigationComp />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/characters" element={<CharactersView />} />
            <Route path="/character" element={<CharacterView />} />
            <Route path="/episodes" element={<EpisodesView />} />
            <Route path="/episode" element={<EpisodeView />} />
            <Route path="/locations" element={<LocationsView />} />
            <Route path="/location" element={<LocationView />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
