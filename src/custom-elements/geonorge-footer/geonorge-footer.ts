// Dependencies
import {
    Component, CustomElement, CustomElementOptions, Prop, Dispatch, DispatchEmitter,
    Listen, Watch, getElement, getShadowRootElement, Toggle
} from 'super-custom-elements';

// Functions
import { getGeonorgeUrl } from 'functions/urlHelpers';

// Assets
import GeonorgeLogo from 'assets/svg/geonorge-logo.svg';
const KartverketLogo = require('assets/png/kartverket-logo.png').default;


interface StandardButtonOptions extends CustomElementOptions {
}

@Component({
    tag: 'geonorge-footer',
    template: import('./geonorge-footer.html'),
    style: import('./geonorge-footer.scss')
})

export class GeonorgeFooter extends CustomElement {
    private static readonly elementSelector = 'geonorge-footer';
    private geonorgeFooterElement: HTMLButtonElement;
    private geonorgeLogoElement: HTMLDivElement;
    private kartverketLogoElement: HTMLImageElement;
    private linkListElement: HTMLUListElement;
    private aboutSiteHeader: HTMLHeadingElement;
    private contactHeader: HTMLHeadingElement;
    private aSolutionByText: HTMLParagraphElement;
    private contactInfoText: HTMLParagraphElement;

    @Prop() id: string;
    @Prop() environment: string;
    @Prop() language: string;

    constructor() {
        super();
    }

    setup(options?: StandardButtonOptions): void {
        this.connect(options.container);
        if (options.id) {
            this.id = options.id;
        }
    }

    getLinkList(language: string, environment: string) {
        if (language === 'en') {
            return `<li><a href="${getGeonorgeUrl(language, environment)}about/what-is-geonorge/">What is Geonorge</a></li>`
        } else {
            return `
                <li><a href="${getGeonorgeUrl(language, environment)}aktuelt/om-geonorge/">Om Geonorge</a></li>
                <li><a href="${getGeonorgeUrl(language, environment)}aktuelt/Nyheter/annet/personvern-og-bruk-av-cookies/">Personvern og bruk av cookies</a></li>
            `
        }
    }

    getContactInfoText(language: string, environment: string) {
        if (language === 'en') {
            return `
            <p>
            Telephone: +47 32 11 80 00<br>
            <a title="post@norgedigitalt.no" href="mailto:post@norgedigitalt.no">post@norgedigitalt.no</a><br>
            Org. nr.: 971 040 238
            </p>
            `
        } else {
            return `
            <p>
            Telefon: 32 11 80 00<br>
            <a title="post@norgedigitalt.no" href="mailto:post@norgedigitalt.no">post@norgedigitalt.no</a><br>
            Org. nr.: 971 040 238
            </p>
            `
        }
    }

    connectedCallback() {
        this.geonorgeFooterElement = getShadowRootElement(this, '#geonorge-footer');
        this.geonorgeLogoElement = getShadowRootElement(this, '#geonorge-logo');
        this.kartverketLogoElement = getShadowRootElement(this, '#kartverket-logo');
        this.linkListElement = getShadowRootElement(this, '#link-list');
        this.aboutSiteHeader = getShadowRootElement(this, '#about-site-header');
        this.contactHeader = getShadowRootElement(this, '#contact-header');
        this.aSolutionByText = getShadowRootElement(this, '#a-solution-by-text');
        this.contactInfoText = getShadowRootElement(this, '#contact-info-text');


        this.geonorgeFooterElement.setAttribute('environment', this.environment);

        this.geonorgeLogoElement.innerHTML = GeonorgeLogo;
        this.kartverketLogoElement.src = KartverketLogo;

        this.linkListElement.innerHTML = this.getLinkList(this.language, this.environment)
        this.contactInfoText.innerHTML = this.getContactInfoText(this.language, this.environment)
        this.aboutSiteHeader.innerText = this.language === 'en' ? 'About' : 'Om nettstedet';
        this.contactHeader.innerText = this.language === 'en' ? 'Contact' : 'Kontakt';
        this.aSolutionByText.innerText = this.language === 'en' ? 'A solution by' : 'Kontakt';
    }

    @Watch('language')
    languageChanged() {
        this.linkListElement.innerHTML = this.getLinkList(this.language, this.environment);
        this.contactInfoText.innerHTML = this.getContactInfoText(this.language, this.environment);
        this.aboutSiteHeader.innerText = this.language === 'en' ? 'About' : 'Om nettstedet';
        this.contactHeader.innerText = this.language === 'en' ? 'Contact' : 'Kontakt';
        this.aSolutionByText.innerText = this.language === 'en' ? 'A solution by' : 'En løsning fra';

    }
}
