import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import CharacterView from "./CharacterView";
import LoadingComp from "../../components/Loading";
import { GET_CHARACTER } from "../../gql/Characters/getCharacter";
import Card from "react-bootstrap/Card";

const mockCharacterData = [
  {
    request: { query: GET_CHARACTER, variables: { id: 1 } },
    result: {
      data: {
        character: {
          name: "Rick Sanchez",
          id: "1",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          species: "Human",
          type: "",
          status: "Alive",
          gender: "Male",
          created: "2017-11-04T18:48:46.250Z",
          origin: {
            id: "1",
            name: "Earth (C-137)",
          },
          location: {
            id: "3",
            name: "Citadel of Ricks",
          },
          episode: [
            {
              id: "1",
              name: "Pilot",
            },
            {
              id: "2",
              name: "Lawnmower Dog",
            },
            {
              id: "3",
              name: "Anatomy Park",
            },
            {
              id: "4",
              name: "M. Night Shaym-Aliens!",
            },
            {
              id: "5",
              name: "Meeseeks and Destroy",
            },
            {
              id: "6",
              name: "Rick Potion #9",
            },
            {
              id: "7",
              name: "Raising Gazorpazorp",
            },
            {
              id: "8",
              name: "Rixty Minutes",
            },
            {
              id: "9",
              name: "Something Ricked This Way Comes",
            },
            {
              id: "10",
              name: "Close Rick-counters of the Rick Kind",
            },
            {
              id: "11",
              name: "Ricksy Business",
            },
            {
              id: "12",
              name: "A Rickle in Time",
            },
            {
              id: "13",
              name: "Mortynight Run",
            },
            {
              id: "14",
              name: "Auto Erotic Assimilation",
            },
            {
              id: "15",
              name: "Total Rickall",
            },
            {
              id: "16",
              name: "Get Schwifty",
            },
            {
              id: "17",
              name: "The Ricks Must Be Crazy",
            },
            {
              id: "18",
              name: "Big Trouble in Little Sanchez",
            },
            {
              id: "19",
              name: "Interdimensional Cable 2: Tempting Fate",
            },
            {
              id: "20",
              name: "Look Who's Purging Now",
            },
            {
              id: "21",
              name: "The Wedding Squanchers",
            },
            {
              id: "22",
              name: "The Rickshank Rickdemption",
            },
            {
              id: "23",
              name: "Rickmancing the Stone",
            },
            {
              id: "24",
              name: "Pickle Rick",
            },
            {
              id: "25",
              name: "Vindicators 3: The Return of Worldender",
            },
            {
              id: "26",
              name: "The Whirly Dirly Conspiracy",
            },
            {
              id: "27",
              name: "Rest and Ricklaxation",
            },
            {
              id: "28",
              name: "The Ricklantis Mixup",
            },
            {
              id: "29",
              name: "Morty's Mind Blowers",
            },
            {
              id: "30",
              name: "The ABC's of Beth",
            },
            {
              id: "31",
              name: "The Rickchurian Mortydate",
            },
            {
              id: "32",
              name: "Edge of Tomorty: Rick, Die, Rickpeat",
            },
            {
              id: "33",
              name: "The Old Man and the Seat",
            },
            {
              id: "34",
              name: "One Crew Over the Crewcoo's Morty",
            },
            {
              id: "35",
              name: "Claw and Hoarder: Special Ricktim's Morty",
            },
            {
              id: "36",
              name: "Rattlestar Ricklactica",
            },
            {
              id: "37",
              name: "Never Ricking Morty",
            },
            {
              id: "38",
              name: "Promortyus",
            },
            {
              id: "39",
              name: "The Vat of Acid Episode",
            },
            {
              id: "40",
              name: "Childrick of Mort",
            },
            {
              id: "41",
              name: "Star Mort: Rickturn of the Jerri",
            },
            {
              id: "42",
              name: "Mort Dinner Rick Andre",
            },
            {
              id: "43",
              name: "Mortyplicity",
            },
            {
              id: "44",
              name: "A Rickconvenient Mort",
            },
            {
              id: "45",
              name: "Rickdependence Spray",
            },
            {
              id: "46",
              name: "Amortycan Grickfitti",
            },
            {
              id: "47",
              name: "Rick & Morty's Thanksploitation Spectacular",
            },
            {
              id: "48",
              name: "Gotron Jerrysis Rickvangelion",
            },
            {
              id: "49",
              name: "Rickternal Friendshine of the Spotless Mort",
            },
            {
              id: "50",
              name: "Forgetting Sarick Mortshall",
            },
            {
              id: "51",
              name: "Rickmurai Jack",
            },
          ],
        },
      },
    },
  },
];

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { from: { id: 1, type: "character" } },
  }),
}));

it("renders the loading component when loading", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockCharacterData}>
        <BrowserRouter>
          <CharacterView />
        </BrowserRouter>
      </MockedProvider>
    );
  });
  expect(wrapper.find(LoadingComp).find(".visually-hidden").text()).toBe(
    "Loading..."
  );
});

it("renders name of Rick Sanchez inside Card component", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockCharacterData}>
        <BrowserRouter>
          <CharacterView />
        </BrowserRouter>
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper.find(Card.Body).find("#test").find(Card.Body).text()).toBe(
    "Rick Sanchez"
  );
});
