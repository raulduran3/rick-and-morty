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
import "./style/style.css";

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
            <Route path="/characters/:page" element={<CharactersView />} />
            <Route path="/character/:id" element={<CharacterView />} />
            <Route path="/episodes/:page" element={<EpisodesView />} />
            <Route path="/episode/:id" element={<EpisodeView />} />
            <Route path="/locations/:page" element={<LocationsView />} />
            <Route path="/location/:id" element={<LocationView />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
