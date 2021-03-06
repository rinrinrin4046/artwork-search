/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppArtworks {
        "keyword": string;
    }
    interface AppArtworksItem {
        "name": string;
        "url": string;
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppArtworksElement extends Components.AppArtworks, HTMLStencilElement {
    }
    var HTMLAppArtworksElement: {
        prototype: HTMLAppArtworksElement;
        new (): HTMLAppArtworksElement;
    };
    interface HTMLAppArtworksItemElement extends Components.AppArtworksItem, HTMLStencilElement {
    }
    var HTMLAppArtworksItemElement: {
        prototype: HTMLAppArtworksItemElement;
        new (): HTMLAppArtworksItemElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-artworks": HTMLAppArtworksElement;
        "app-artworks-item": HTMLAppArtworksItemElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppArtworks {
        "keyword"?: string;
    }
    interface AppArtworksItem {
        "name"?: string;
        "url"?: string;
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-artworks": AppArtworks;
        "app-artworks-item": AppArtworksItem;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-artworks": LocalJSX.AppArtworks & JSXBase.HTMLAttributes<HTMLAppArtworksElement>;
            "app-artworks-item": LocalJSX.AppArtworksItem & JSXBase.HTMLAttributes<HTMLAppArtworksItemElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
