/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import LocationsView from "./LocationsView";
import TableComp from "../../components/Table";
import LoadingComp from "../../components/Loading";
import { GET_LOCATIONS } from "../../gql/Locations/getLocations";

const mockLocationsData = [
  {
    request: { query: GET_LOCATIONS, variables: { page: 1 } },
    result: {
      data: {
        locations: {
          info: {
            count: 126,
            next: 2,
            prev: null,
            pages: 7,
          },
          results: [
            {
              id: "1",
              name: "Earth (C-137)",
              type: "Planet",
              dimension: "Dimension C-137",
              created: "2017-11-10T12:42:04.162Z",
            },
          ],
        },
      },
    },
  },
];

it("renders the loading component when loading", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockLocationsData}>
        <BrowserRouter>
          <LocationsView />
        </BrowserRouter>
      </MockedProvider>
    );
  });
  expect(wrapper.find(LoadingComp).find(".visually-hidden").text()).toBe(
    "Loading..."
  );
});

it("renders name of Earth (C-137) inside table component", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockLocationsData}>
        <BrowserRouter>
          <LocationsView />
        </BrowserRouter>
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper.find(TableComp).find(".location").text()).toBe(
    "Earth (C-137)"
  );
});
