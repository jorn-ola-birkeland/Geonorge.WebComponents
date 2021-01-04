// Dependencies
import {
    Component, CustomElement, CustomElementOptions, Prop, Dispatch, DispatchEmitter,
    Listen, Watch, getElement, getShadowRootElement, Toggle
} from 'super-custom-elements';


// Assets
import MenuIcon from 'assets/svg/menu-icon.svg';
import CloseIcon from 'assets/svg/close-icon.svg';

// Functions
import { fetchMenuItems } from 'functions/apiHelpers';
import { setLanguage } from 'functions/cookieHelpers';

interface MainMenuOptions extends CustomElementOptions {
    active?: boolean,
    onClick?: () => void,
    onSignInClick?: () => void,
    onSignOutClick?: () => void
}

interface MenuItem extends Object {
    Name: string,
    SubMenuItem: Array<MenuItem>,
    Url: string
}

@Component({
    tag: 'main-menu',
    template: import('./main-menu.html'),
    style: import('./main-menu.scss')
})

export class MainMenu extends CustomElement {
    private static readonly elementSelector = 'main-menu';
    private menuButton: HTMLButtonElement;
    private menuIcon: HTMLSpanElement;
    private closeIcon: HTMLSpanElement;
    private menuContainer: HTMLElement;
    private menuItemListContainer: HTMLElement;
    private menuActionsRow: HTMLElement;

    @Prop() id: string;
    @Prop() language: string;
    @Prop() environment: string;
    @Prop() signinurl: string;
    @Prop() signouturl: string;
    @Prop() norwegianurl: string;
    @Prop() englishurl: string;
    @Toggle() isloggedin: boolean;
    @Toggle() showmenu: boolean;
    @Toggle() hasAuthenticationFunction: boolean;
    @Prop() menuitems: Array<MenuItem>;
    @Dispatch('onSignInClick') onSignInClick: DispatchEmitter;
    @Dispatch('onSignOutClick') onSignOutClick: DispatchEmitter;


    constructor() {
        super();
        this.clickOutsideMenuContainer = this.clickOutsideMenuContainer.bind(this);
    }

    setup(options?: MainMenuOptions): void {
        this.connect(options.container);
        if (options.id) {
            this.id = options.id;
        }
    }

    connectedCallback() {
        this.menuButton = getShadowRootElement(this, '#menu-toggle-button');
        this.menuIcon = getShadowRootElement(this, '#menu-icon');
        this.closeIcon = getShadowRootElement(this, '#close-icon');
        this.menuContainer = getShadowRootElement(this, '#menu-container');
        this.menuItemListContainer = getShadowRootElement(this, '#menu-item-list-container');
        this.menuActionsRow = getShadowRootElement(this, '#menu-actions-row');
        this.menuIcon.innerHTML = MenuIcon;
        this.closeIcon.innerHTML = CloseIcon;

        this.showmenu ? this.menuIcon.classList.add('hidden') : this.closeIcon.classList.add('hidden');


        fetchMenuItems(this.language).then(menuItems => {
            this.menuitems = menuItems;
        });

        const hasAuthenticationUrls = this.signinurl && this.signouturl;
        if (hasAuthenticationUrls) {
            this.addAuthenticationLinks();
        }

        const supportsLanguages = this.englishurl && this.norwegianurl;
        if (supportsLanguages) {
            const languageToggleElement = document.createElement("a");
            languageToggleElement.innerText = this.language === 'en' ? 'Norsk' : 'English';
            languageToggleElement.href = this.language === 'en' ? this.norwegianurl : this.englishurl;
            languageToggleElement.id = 'language-toggle-element';
            this.menuActionsRow.appendChild(languageToggleElement);
        }

        document.addEventListener('click', this.clickOutsideMenuContainer);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.clickOutsideMenuContainer);
    }

    hideMenuContainer = () => {
        this.showmenu = false;
    }


    clickOutsideMenuContainer(event: MouseEvent) {
        const targetElement = event.composedPath()[0] as Element;
        targetElement.closest('#menu-container');
        if (targetElement.closest('#menu-container') || targetElement.closest('#menu-toggle-button')) return
        this.hideMenuContainer();
    }

    renderMenuItems = (menuItems: Array<MenuItem>, hierarchyLevel: number = 0, maxHierarchyLevel: number = 1) => {
        const menuItemsListElement = menuItems.map((menuItem: MenuItem) => {
            const subItems = menuItem.SubMenuItem && menuItem.SubMenuItem.length ? menuItem.SubMenuItem : null;
            const menuItemElement = `<a href="${menuItem.Url}">${menuItem.Name}</a>`;
            const subItemElements = subItems && hierarchyLevel + 1 <= maxHierarchyLevel ? this.renderMenuItems(subItems, hierarchyLevel + 1, maxHierarchyLevel) : '';
            return `<li>${menuItemElement}${subItemElements}</li>`;
        }).join('');
        return `<ul class="menuItemList hierarchy-level-${hierarchyLevel}">${menuItemsListElement}</ul>`;
    }

    addAuthenticationLinks(hasAuthenticationFunction = false) {
        let loginToggleElement;

        if (hasAuthenticationFunction) {
            loginToggleElement = document.createElement("span");
            loginToggleElement.addEventListener("click", () => {
                this.isloggedin ? this.onSignOutClick.emit() : this.onSignInClick.emit();
            });
        } else {
            loginToggleElement = document.createElement("a");
            loginToggleElement.href = this.isloggedin ? this.signouturl : this.signouturl;
        }
        loginToggleElement.innerText = this.isloggedin ? "Logg ut" : "Logg inn"

        loginToggleElement.id = 'authentication-toggle-element';

        // Remove previously added login toggle element if exists
        for (const childElement of this.menuActionsRow.children) {
            if (childElement.getAttribute('id') === loginToggleElement.id) {
                childElement.remove()
            }
        }

        // Add login toggle element
        this.menuActionsRow.appendChild(loginToggleElement);
    }

    @Listen('click', '#menu-toggle-button')
    buttonClicked(event: MouseEvent) {
        this.showmenu = !this.showmenu;
    }


    @Listen('click', '#language-toggle-element')
    languageToggleClicker(event: MouseEvent) {
        this.language === 'en' ? setLanguage('no') : setLanguage('en');
    }


    @Watch('hasauthenticationfunction')
    hasAuthenticationFunctionChanged() {
        if (this.hasAuthenticationFunction) {
            this.addAuthenticationLinks(true);
        }
    }

    @Watch('isloggedin')
    isLoggedInChanged() {
        this.addAuthenticationLinks(this.hasAuthenticationFunction);
    }

    @Watch('showmenu')
    showMenuChanged() {
        this.showmenu ? this.menuContainer.classList.add('open') : this.menuContainer.classList.remove('open');
        this.showmenu ? this.menuButton.classList.add('open') : this.menuButton.classList.remove('open');
        this.showmenu ? this.menuItemListContainer.classList.add('open') : this.menuItemListContainer.classList.remove('open');
        this.showmenu ? this.menuActionsRow.classList.add('open') : this.menuActionsRow.classList.remove('open');
        this.showmenu ? this.menuIcon.classList.add('hidden') : this.menuIcon.classList.remove('hidden');
        this.showmenu ? this.closeIcon.classList.remove('hidden') : this.closeIcon.classList.add('hidden');
    }

    @Watch('menuitems')
    menuItemsChanged() {
        if (this.menuitems && this.menuitems.length) {
            this.menuItemListContainer.innerHTML = this.renderMenuItems(this.menuitems);
        }
    }

    public static setup(selector: string, options: MainMenuOptions) {
        const element = getElement<MainMenu>(selector);

        if (options.onClick) {
            element.addEventListener('menuButtonClick', options.onClick);
        }
        if (options.active) {
            element.showmenu = options.active;
        }
    }
}
