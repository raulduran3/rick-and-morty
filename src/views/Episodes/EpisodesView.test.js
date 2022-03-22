/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import EpisodesView from "./EpisodesView";
import TableComp from "../../components/Table";
import LoadingComp from "../../components/Loading";
import { GET_EPISODES } from "../../gql/Episodes/getEpisodes";

const mockEpisodesData = [
  {
    request: { query: GET_EPISODES, variables: { page: 1 } },
    result: {
      data: {
        episodes: {
          info: {
            count: 51,
            next: 2,
            prev: null,
            pages: 3,
          },
          results: [
            {
              id: "1",
              name: "Pilot",
              air_date: "December 2, 2013",
              episode: "S01E01",
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
      <MockedProvider addTypename={false} mocks={mockEpisodesData}>
        <BrowserRouter>
          <EpisodesView />
        </BrowserRouter>
      </MockedProvider>
    );
  });
  expect(wrapper.find(LoadingComp).find(".visually-hidden").text()).toBe(
    "Loading..."
  );
});

it("renders name of Pilot inside table component", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockEpisodesData}>
        <BrowserRouter>
          <EpisodesView />
        </BrowserRouter>
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper.find(TableComp).find(".episode").text()).toBe("Pilot");
});
