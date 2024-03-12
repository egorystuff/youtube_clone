import { render, screen, waitForElementToBeRemoved } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import BaseModal from "./BaseModal.vue";
import icons from "../../assets/icons";

const user = userEvent.setup();

function renderModal(body = "", footer = "", withCloseButton = false) {
  const options = {
    props: {
      withCloseButton,
    },
    slots: {
      default: body,
      footer,
    },
  };

  return render(BaseModal, options);
}

function assertModalClosed(body) {
  return waitForElementToBeRemoved([screen.queryByText(body), screen.queryByTestId("base-modal-overlay")]);
}

const body = "This is modal body";

//modificators ==========================================================================

// test.only('renders modal with body and footer', () => {
// test.skip('renders modal with body and footer', () => {
// xtest('renders modal with body and footer', () => {
// it('renders modal with body and footer', () => {
// it.only('renders modal with body and footer', () => {
// fit('renders modal with body and footer', () => {
// it.skip('renders modal with body and footer', () => {
// xit('renders modal with body and footer', () => {

//tests ==========================================================================

describe("rendering", () => {
  it("renders with body and footer", () => {
    const footer = "This is modal footer";

    renderModal(body, footer);

    screen.getByText(body);
    screen.getByText(footer);
  });

  it("renders with close button", () => {
    const withCloseButton = true;

    renderModal("", "", withCloseButton);

    expect(screen.getByTestId("base-icon")).toContainHTML(icons["x"]);
  });

  it("renders without close button", () => {
    const withCloseButton = false;

    renderModal("", "", withCloseButton);

    expect(screen.queryByTestId("base-icon")).not.toBeInTheDocument();
  });
});

//tests ==========================================================================

describe("closing", () => {
  it("closes when clicking close button", () => {
    const withCloseButton = true;

    renderModal(body, "", withCloseButton);

    user.click(screen.getByTestId("base-modal-button-close"));

    return assertModalClosed(body);
  });

  it("closes when clicking overlay", () => {
    renderModal(body);

    user.click(screen.getByTestId("base-modal-overlay"));

    return assertModalClosed(body);
  });

  it("closes when clicking cancel button in the footer", () => {
    const footer = `
      <template #footer="{ close }">
        <button @click="close">Cancel</button>
      </template>
    `;

    renderModal(body, footer);

    user.click(screen.getByRole("button", { name: "Cancel" }));

    return assertModalClosed(body);
  });

  it("closes when pressing esc key", () => {
    renderModal(body);

    screen.getByRole("dialog").focus();

    user.keyboard("{Escape}");

    return assertModalClosed(body);
  });
});
