import { render, screen } from "@testing-library/vue";
import BaseCheckbox from "./BaseCheckbox.vue";

it("renders with label and checked", () => {
  const label = "Test Label";

  render(BaseCheckbox, {
    props: {
      id: "checkbox",
      value: 1,
      modelValue: [1, 2, 3],
    },
    slots: {
      default: label,
    },
  });

  // const checkbox = screen.getByLabelText(label);

  // expect(checkbox.checked).toBe(true);
});

it("renders unchecked", () => {
  render(BaseCheckbox);

  expect(screen.getByRole("checkbox").checked).toBe(false);
});
