import { render, screen } from "@testing-library/vue";
import BaseButton from "./BaseButton.vue";

test("renders base button", () => {
  render(BaseButton, {
    slots: {
      default: "Test button",
    },
  });

  screen.getByText("Test button");
});
