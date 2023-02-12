/* eslint-disable-next-line quotes */
import Repositories from "./Repositories";

import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

const mockData = [
  {
    language: "eng",
    description: "tese desc",
    name: "Bohdan",
    watchers: 251,
    stargazers_count: 4224,
    owner: {
      login: "Bohdan",
    },
  },
  {
    language: "ua",
    description: "test desc2",
    name: "Erog",
    watchers: 51,
    stargazers_count: 424,
    owner: {
      login: "Erog",
    },
  },
];

const setUp = (props?: any) => shallow(<Repositories {...props} />);

describe("Repositories", () => {
  it("should render component without issues", () => {
    const wrapper = setUp({ repositories: mockData });
    const component = wrapper.find(`[data-id="success"]`);
    expect(component.length).toBe(1);
  });
  it("should render error component", () => {
    const wrapper = setUp({ repositories: [], errorMessage: "Error message" });
    const component = wrapper.find(`[data-id="error"]`);
    expect(component.length).toBe(1);
  });
  it("should render no-results component", () => {
    const wrapper = setUp({ repositories: [] });
    const component = wrapper.find(`[data-id="no-results"]`);
    expect(component.length).toBe(1);
  });
  it("should render loading component ", () => {
    const wrapper = setUp({ repositories: [], isLoading: true });
    const component = wrapper.find(`[data-id="loading"]`);
    expect(component.length).toBe(1);
  });
});
