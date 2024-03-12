import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import BaseTooltip from "./BaseTooltip.vue";

const user = userEvent.setup();

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
  return user.hover(getOwningElement());
}

function moveCursorAwayFromOwningElement() {
  return user.unhover(getOwningElement());
}

function clickOwningElement() {
  return user.click(getOwningElement());
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
  beforeEach(async () => {
    renderTooltip(text, button);

    await hoverOverOwningElement();

    assertTooltipShown();
  });

  afterEach(() => {});

  it("hides after moving cursor away from owning element", async () => {
    await moveCursorAwayFromOwningElement();

    assertTooltipHidden();
  });

  it("hides after clicking owning element", async () => {
    await clickOwningElement();

    assertTooltipHidden();
  });
});
