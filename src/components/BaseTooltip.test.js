import { render, screen, fireEvent } from "@testing-library/vue";
import BaseTooltip from "./BaseTooltip.vue";

const text = "Tooltip text";
const buttonLabel = "Click Me";
const button = `<button>${buttonLabel}</button>`;

//functions ==========================================================================

function assertTooltipHidden() {
  expect(screen.getByText(text)).not.toBeVisible();
}

function assertTooltipShown() {
  expect(screen.getByText(text)).toBeVisible();
}

function renderTooltip(text, element = "") {
  const options = {
    props: {
      text,
    },
    slots: {
      default: element,
    },
  };

  return render(BaseTooltip, options);
}

function hoverOverOwningElement() {
  return fireEvent.mouseEnter(getOwningElement());
}

function moveCursorAwayFromOwningElement() {
  return fireEvent.mouseLeave(getOwningElement());
}

function clickOwningElement() {
  return fireEvent.click(getOwningElement());
}

function getOwningElement() {
  return screen.getByText(buttonLabel).parentElement;
}

//tests ==========================================================================

describe("rendering", () => {
  it("renders hidden with specified text", () => {
    renderTooltip(text);

    assertTooltipHidden();
  });

  it("renders with owning element", () => {
    renderTooltip("", button);

    assertTooltipShown();
  });
});

//tests ==========================================================================

describe("showing", () => {
  it("shows after hovering over owning element", async () => {
    renderTooltip(text, button);

    await hoverOverOwningElement();

    assertTooltipShown();
  });
});

//tests ==========================================================================

describe("hiding", () => {
  it("hides after moving cursor away from owning element", async () => {
    renderTooltip(text, button);

    await hoverOverOwningElement();

    assertTooltipShown();

    await moveCursorAwayFromOwningElement();

    assertTooltipHidden();
  });

  it("hides after clicking owning element", async () => {
    renderTooltip(text, button);

    await hoverOverOwningElement();

    assertTooltipShown();

    await clickOwningElement();

    assertTooltipHidden();
  });
});
