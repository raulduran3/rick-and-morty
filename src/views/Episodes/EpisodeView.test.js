/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import EpisodeView from "./EpisodeView";
import LoadingComp from "../../components/Loading";
import { GET_EPISODE } from "../../gql/Episodes/getEpisode";

const mockEpisodeData = [
  {
    request: { query: GET_EPISODE, variables: { id: 1 } },
    result: {
      data: {
        episode: {
          id: "1",
          name: "Pilot",
          air_date: "December 2, 2013",
          episode: "S01E01",
          created: "2017-11-10T12:56:33.798Z",
          characters: [
            {
              id: "1",
              name: "Rick Sanchez",
            },
            {
              id: "2",
              name: "Morty Smith",
            },
            {
              id: "35",
              name: "Bepisian",
            },
            {
              id: "38",
              name: "Beth Smith",
            },
            {
              id: "62",
              name: "Canklanker Thom",
            },
            {
              id: "92",
              name: "Davin",
            },
            {
              id: "127",
              name: "Frank Palicky",
            },
            {
              id: "144",
              name: "Glenn",
            },
            {
              id: "158",
              name: "Hookah Alien",
            },
            {
              id: "175",
              name: "Jerry Smith",
            },
            {
              id: "179",
              name: "Jessica",
            },
            {
              id: "181",
              name: "Jessica's Friend",
            },
            {
              id: "239",
              name: "Mr. Goldenfold",
            },
            {
              id: "249",
              name: "Mrs. Sanchez",
            },
            {
              id: "271",
              name: "Principal Vagina",
            },
            {
              id: "338",
              name: "Summer Smith",
            },
            {
              id: "394",
              name: "Davin",
            },
            {
              id: "395",
              name: "Greebybobe",
            },
            {
              id: "435",
              name: "Pripudlian",
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
    id: 1,
  }),
}));

it("renders the loading component when loading", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockEpisodeData}>
        <BrowserRouter>
          <EpisodeView />
        </BrowserRouter>
      </MockedProvider>
    );
  });
  expect(wrapper.find(LoadingComp).find(".visually-hidden").text()).toBe(
    "Loading..."
  );
});

it("renders name of #1 Pilot inside Card component", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockEpisodeData}>
        <BrowserRouter>
          <EpisodeView />
        </BrowserRouter>
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper.find("div.card-body").at(0).text()).toBe("#1 Pilot");
});
