import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import LocationView from "./LocationView";
import LoadingComp from "../../components/Loading";
import { GET_LOCATION } from "../../gql/Locations/getLocation";
import Card from "react-bootstrap/Card";

const mockLocationData = [
  {
    request: { query: GET_LOCATION, variables: { id: 1 } },
    result: {
      data: {
        location: {
          id: "1",
          name: "Earth (C-137)",
          type: "Planet",
          dimension: "Dimension C-137",
          created: "2017-11-10T12:42:04.162Z",
          residents: [
            {
              id: "38",
              name: "Beth Smith",
            },
            {
              id: "45",
              name: "Bill",
            },
            {
              id: "71",
              name: "Conroy",
            },
            {
              id: "82",
              name: "Cronenberg Rick",
            },
            {
              id: "83",
              name: "Cronenberg Morty",
            },
            {
              id: "92",
              name: "Davin",
            },
            {
              id: "112",
              name: "Eric McMan",
            },
            {
              id: "114",
              name: "Ethan",
            },
            {
              id: "116",
              name: "Evil Beth Clone",
            },
            {
              id: "117",
              name: "Evil Jerry Clone",
            },
            {
              id: "120",
              name: "Evil Summer Clone",
            },
            {
              id: "127",
              name: "Frank Palicky",
            },
            {
              id: "155",
              name: "Harold",
            },
            {
              id: "169",
              name: "Jacob",
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
              id: "186",
              name: "Joyce Smith",
            },
            {
              id: "201",
              name: "Leonard Smith",
            },
            {
              id: "216",
              name: "MC Haps",
            },
            {
              id: "239",
              name: "Mr. Goldenfold",
            },
            {
              id: "271",
              name: "Principal Vagina",
            },
            {
              id: "302",
              name: "Ruben",
            },
            {
              id: "303",
              name: "Samantha",
            },
            {
              id: "338",
              name: "Summer Smith",
            },
            {
              id: "343",
              name: "Tammy Guetermann",
            },
            {
              id: "356",
              name: "Tom Randolph",
            },
            {
              id: "394",
              name: "Davin",
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
    state: { from: { id: 1, type: "episode" } },
  }),
}));

it("renders the loading component when loading", () => {
  let wrapper;
  act(() => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockLocationData}>
        <BrowserRouter>
          <LocationView />
        </BrowserRouter>
      </MockedProvider>
    );
  });
  expect(wrapper.find(LoadingComp).find(".visually-hidden").text()).toBe(
    "Loading..."
  );
});

it("renders name of Earth (C-137) inside Card component", async () => {
  let wrapper;
  await act(async () => {
    wrapper = mount(
      <MockedProvider addTypename={false} mocks={mockLocationData}>
        <BrowserRouter>
          <LocationView />
        </BrowserRouter>
      </MockedProvider>
    );
  });

  await act(() => wait(0));
  wrapper.update();
  expect(wrapper.find(Card.Body).find("#test").find(Card.Body).text()).toBe(
    "Earth (C-137)"
  );
});
