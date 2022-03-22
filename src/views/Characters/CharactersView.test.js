/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import CharactersView from "./CharactersView";
import TableComp from "../../components/Table";
import LoadingComp from "../../components/Loading";
import { GET_CHARACTERS } from "../../gql/Characters/getCharacters";

const mockCharactersData = [
  {
    request: { query: GET_CHARACTERS, variables: { page: 1 } },
    result: {
      data: {
        characters: {
          info: {
            count: 826,
            next: 2,
            prev: null,
            pages: 42,
          },
          results: [
            {
              name: "Rick Sanchez",
              id: "1",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              species: "Human",
              type: "",
              status: "Alive",
              gender: "Male",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Citadel of Ricks",
              },
            },
          ],
        },
      },
    },
  },
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    page: 1,
  }),
}));

it("renders the loading component when loading", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockCharactersData}>
        <BrowserRouter>
          <CharactersView />
        </BrowserRouter>
      </MockedProvider>
    );
  });
  expect(wrapper.find(LoadingComp).find(".visually-hidden").text()).toBe(
    "Loading..."
  );
});

it("renders name of Rick Sanchez inside table component", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockCharactersData}>
        <BrowserRouter>
          <CharactersView />
        </BrowserRouter>
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper.find(TableComp).find(".character").text()).toBe(
    "Rick Sanchez"
  );
});
