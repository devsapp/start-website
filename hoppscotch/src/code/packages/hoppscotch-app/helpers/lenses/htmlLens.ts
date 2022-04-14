import { Lens } from "./lenses"

const htmlLens: Lens = {
  lensName: "response.html",
  isSupportedContentType: (contentType) =>
    /\btext\/html|application\/xhtml\+xml\b/i.test(contentType),
  renderer: "htmlres",
  rendererImport: () =>
    import("~/components/lenses/renderers/HTMLLensRenderer.vue"),
}

export default htmlLens
