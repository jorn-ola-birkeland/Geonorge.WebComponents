// Dependencies
import {
    Component,
    CustomElement,
    CustomElementOptions,
    Prop,
    Watch,
    getElement,
    getShadowRootElement
} from "super-custom-elements";

interface BreadcrumbListOptions extends CustomElementOptions {
    breadcrumbs: Array<BreadcrumbListItem>;
}

interface BreadcrumbListItem extends Object {
    name: string;
    url: string;
}

@Component({
    tag: "breadcrumb-list",
    template: import("./breadcrumb-list.html"),
    style: import("./breadcrumb-list.scss")
})
export class BreadcrumbList extends CustomElement {
    private static readonly elementSelector = "breadcrumb-list";
    private breadcrumbListElement: HTMLUListElement;

    @Prop() id: string;
    @Prop() breadcrumbs: any; // Array<BreadcrumbListItem>;

    constructor() {
        super();
    }

    setup(options?: BreadcrumbListOptions): void {
        this.connect(options.container);
        if (options.id) {
            this.id = options.id;
        }
    }

    connectedCallback() {
        this.breadcrumbListElement = getShadowRootElement(this, "#breadcrumb-list");
    }

    public static renderBreadcrumbs = (breadcrumbs: Array<BreadcrumbListItem>) => {
        const breadcrumbsListElement = breadcrumbs
            .map((breadcrumbListItem: BreadcrumbListItem) => {
                const activeHash = `${window.location.hash}`;
                const activePath = `${window.location.pathname}${window.location.hash}${window.location.search}`;
                const activeHref = window.location.href;
                const isActiveHash = activeHash.toLowerCase() === breadcrumbListItem.url.toLowerCase();
                const isActivePath = activePath.toLowerCase() === breadcrumbListItem.url.toLowerCase();
                const isActiveHref = activeHref.toLowerCase() === breadcrumbListItem.url.toLowerCase();

                const menuItemElement =
                    breadcrumbListItem?.url?.length && !isActiveHash && !isActivePath && !isActiveHref
                        ? `<a href="${breadcrumbListItem.url}">${breadcrumbListItem.name}</a>`
                        : `<span>${breadcrumbListItem.name}</span>`;
                return `<li>${menuItemElement}</li>`;
            })
            .join("");
        return `<ul class="breadcrumbs">${breadcrumbsListElement}</ul>`;
    };

    renderBreadcrumbsFromAttribute = (breadcrumbs: string) => {
        const breadcrumbListItems = JSON.parse(breadcrumbs);
        BreadcrumbList.renderBreadcrumbs(breadcrumbListItems);
    };

    @Watch("breadcrumbs")
    breadcrumbsChanged() {
        if (this.breadcrumbs?.length) {
            this.renderBreadcrumbsFromAttribute(this.breadcrumbs);
        }
    }

    public static setup(selector: string, options: BreadcrumbListOptions) {
        const element = getElement<BreadcrumbList>(selector);
        getShadowRootElement(element, "#breadcrumb-list").innerHTML = this.renderBreadcrumbs(options.breadcrumbs);
    }
}