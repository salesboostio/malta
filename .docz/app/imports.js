export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/atoms/Box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-box" */ 'src/atoms/Box.mdx'),
  'src/atoms/Container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-container" */ 'src/atoms/Container.mdx'),
  'src/atoms/Flex.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-flex" */ 'src/atoms/Flex.mdx'),
  'src/atoms/Image.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-image" */ 'src/atoms/Image.mdx'),
  'src/atoms/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-input" */ 'src/atoms/Input.mdx'),
  'src/atoms/Text.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-text" */ 'src/atoms/Text.mdx'),
  'src/atoms/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-atoms-index" */ 'src/atoms/index.mdx'),
  'src/commons/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-commons-index" */ 'src/commons/index.mdx'),
  'src/misc/Absolute.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-absolute" */ 'src/misc/Absolute.mdx'),
  'src/misc/FullScreen.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-full-screen" */ 'src/misc/FullScreen.mdx'),
  'src/misc/Hide.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-hide" */ 'src/misc/Hide.mdx'),
  'src/misc/Overlay.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-overlay" */ 'src/misc/Overlay.mdx'),
  'src/misc/Relative.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-relative" */ 'src/misc/Relative.mdx'),
  'src/misc/Rounded.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-rounded" */ 'src/misc/Rounded.mdx'),
  'src/misc/Shadow.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-shadow" */ 'src/misc/Shadow.mdx'),
  'src/misc/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-misc-index" */ 'src/misc/index.mdx'),
  'src/molecules/Chip.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-molecules-chip" */ 'src/molecules/Chip.mdx'),
  'src/molecules/HyperLink.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-molecules-hyper-link" */ 'src/molecules/HyperLink.mdx'),
  'src/molecules/Span.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-molecules-span" */ 'src/molecules/Span.mdx'),
  'src/molecules/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-molecules-index" */ 'src/molecules/index.mdx'),
  'src/organisms/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-organisms-index" */ 'src/organisms/index.mdx'),
  'src/templates/SalesboostFooter.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-templates-salesboost-footer" */ 'src/templates/SalesboostFooter.mdx'),
  'src/templates/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-templates-index" */ 'src/templates/index.mdx'),
}
