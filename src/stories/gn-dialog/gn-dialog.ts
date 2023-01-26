// Dependencies
import {
    Component,
    CustomElement,
    CustomElementOptions,
    getShadowRootElement,
    Toggle,
    Watch
} from "super-custom-elements";

// Assets
import CloseIcon from "../../assets/svg/close-icon.svg";

interface GnDialogOptions extends CustomElementOptions {}

@Component({
    tag: "gn-dialog",
    template: import("./gn-dialog.html"),
    style: import("./template.scss")
})
export class GnDialog extends CustomElement {
    @Toggle() show: boolean;

    constructor() {
        super();
    }

    connectedCallback() {
        const closeDialogButtonElement = getShadowRootElement(this, "#close-dialog-button");
        closeDialogButtonElement.innerHTML = CloseIcon;
        closeDialogButtonElement.addEventListener("click", this.hideDialog);

        const dialogContainerElement = getShadowRootElement(this, "#dialog-container");
        dialogContainerElement.addEventListener("click", this.handleClickOutside);

        document.addEventListener("keydown", this.keyDownFunction, false);
    }

    disconnectedCallback() {
        const closeDialogButtonElement = getShadowRootElement(this, "#close-dialog-button");
        closeDialogButtonElement.removeEventListener("click", this.hideDialog);

        const dialogContainerElement = getShadowRootElement(this, "#dialog-container");
        dialogContainerElement.removeEventListener("click", this.handleClickOutside);

        document.removeEventListener("keydown", this.keyDownFunction, false);
    }

    handleClickOutside = (event) => {
        const dialogContentElement = getShadowRootElement(this, "#dialog-content");
        const hasClickedInsideSlot = event.target.assignedSlot; // TODO: Will trigger on all slots until we find a better solution
        const hasClickedInsideDialogChild = dialogContentElement.contains(event.target);
        if (dialogContentElement && !(hasClickedInsideSlot || hasClickedInsideDialogChild)) {
            this.hideDialog();
        }
    };

    hideDialog = () => {
        this.setAttribute("show", "false");
    };

    shouldShowDialog(show) {
        return show?.toString() === "" || show?.toString() === "true";
    }

    keyDownFunction = (event) => {
        switch (event.keyCode) {
            case 27: // Escape
                this.hideDialog();
                break;
            default:
                return null;
        }
    };

    @Watch("show")
    showMenuChanged() {
        const shouldShowDialog = this.shouldShowDialog(this.show);
        const dialogContainerElement = getShadowRootElement(this, "#dialog-container");
        shouldShowDialog
            ? dialogContainerElement.classList.add("visible")
            : dialogContainerElement.classList.remove("visible");
    }

    setup(options?: GnDialogOptions): void {}
}
