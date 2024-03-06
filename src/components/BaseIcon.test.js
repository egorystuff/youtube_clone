import { render, screen } from "@testing-library/vue";
import BaseIcon from "./BaseIcon.vue";
import icons from "../assets/icons";

test("renders icon", () => {
  const options = {
    props: { name: Object.keys(icons)[0] },
  };

  render(BaseIcon, options);

  expect(screen.getByTestId("base-icon").innerHTML).toBeTruthy();
});

test("renders non-existent icon", () => {
  const options = {
    props: "nonExistenIcon",
  };

  render(BaseIcon, options);

  expect(screen.getByTestId("base-icon").innerHTML).toBeFalsy();
});
