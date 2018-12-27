export const imports = {
  'src/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-index" */ 'src/components/index.mdx'),
  'src/components/Button/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-index" */ 'src/components/Button/index.mdx'),
}
