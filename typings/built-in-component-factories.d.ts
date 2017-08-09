import { SVGProperties } from './svg-properties'
import { CSSProperties } from './css-properties'
import {
  BuiltInGlamorousComponentFactory,
} from './component-factory'

export type HTMLComponentFactory = {
  [Key in keyof HTMLComponents]: BuiltInGlamorousComponentFactory<
    React.HTMLProps<HTMLComponents[Key]>,
    CSSProperties
  >
}

export type SVGComponentFactory = {
  [Key in keyof SVGComponents]: BuiltInGlamorousComponentFactory<
    React.SVGAttributes<SVGComponents[Key]>,
    SVGProperties
  >
}

export interface HTMLComponents {
  a: HTMLAnchorElement

  abbr: HTMLElement
  address: HTMLElement
  area: HTMLAreaElement
  article: HTMLElement
  aside: HTMLElement
  audio: HTMLAudioElement
  b: HTMLElement
  base: HTMLBaseElement
  bdi: HTMLElement
  bdo: HTMLElement
  big: HTMLElement
  blockquote: HTMLElement
  body: HTMLBodyElement
  br: HTMLBRElement
  button: HTMLButtonElement
  canvas: HTMLCanvasElement
  caption: HTMLElement
  cite: HTMLElement
  code: HTMLElement
  col: HTMLTableColElement
  colgroup: HTMLTableColElement
  data: HTMLElement
  datalist: HTMLDataListElement
  dd: HTMLElement
  del: HTMLElement
  details: HTMLElement
  dfn: HTMLElement
  dialog: HTMLElement
  div: HTMLDivElement
  dl: HTMLDListElement
  dt: HTMLElement
  em: HTMLElement
  embed: HTMLEmbedElement
  fieldset: HTMLFieldSetElement
  figcaption: HTMLElement
  figure: HTMLElement
  footer: HTMLElement
  form: HTMLFormElement
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  head: HTMLHeadElement
  header: HTMLElement
  hgroup: HTMLElement
  hr: HTMLHRElement
  html: HTMLHtmlElement
  i: HTMLElement
  iframe: HTMLIFrameElement
  img: HTMLImageElement
  input: HTMLInputElement
  ins: HTMLModElement
  kbd: HTMLElement
  keygen: HTMLElement
  label: HTMLLabelElement
  legend: HTMLLegendElement
  li: HTMLLIElement
  link: HTMLLinkElement
  main: HTMLElement
  map: HTMLMapElement
  mark: HTMLElement
  menu: HTMLElement
  menuitem: HTMLElement
  meta: HTMLMetaElement
  meter: HTMLElement
  nav: HTMLElement
  noscript: HTMLElement
  object: HTMLObjectElement
  ol: HTMLOListElement
  optgroup: HTMLOptGroupElement
  option: HTMLOptionElement
  output: HTMLElement
  p: HTMLParagraphElement
  param: HTMLParamElement
  picture: HTMLElement
  pre: HTMLPreElement
  progress: HTMLProgressElement
  q: HTMLQuoteElement
  rp: HTMLElement
  rt: HTMLElement
  ruby: HTMLElement
  s: HTMLElement
  samp: HTMLElement
  script: HTMLElement
  section: HTMLElement
  select: HTMLSelectElement
  small: HTMLElement
  source: HTMLSourceElement
  span: HTMLSpanElement
  strong: HTMLElement
  style: HTMLStyleElement
  sub: HTMLElement
  summary: HTMLElement
  sup: HTMLElement
  table: HTMLTableElement
  tbody: HTMLTableSectionElement
  td: HTMLTableDataCellElement
  textarea: HTMLTextAreaElement
  tfoot: HTMLTableSectionElement
  th: HTMLTableHeaderCellElement
  thead: HTMLTableSectionElement
  time: HTMLElement
  title: HTMLTitleElement
  tr: HTMLTableRowElement
  track: HTMLTrackElement
  u: HTMLElement
  ul: HTMLUListElement
  "var": HTMLElement
  video: HTMLVideoElement
  wbr: HTMLElement
}

export type HTMLKey = keyof HTMLComponents

export interface SVGComponents {
  circle: SVGCircleElement
  clipPath: SVGClipPathElement
  defs: SVGDefsElement
  ellipse: SVGEllipseElement
  g: SVGGElement
  image: SVGImageElement
  line: SVGLineElement
  linearGradient: SVGLinearGradientElement
  mask: SVGMaskElement
  path: SVGPathElement
  pattern: SVGPatternElement
  polygon: SVGPolygonElement
  polyline: SVGPolylineElement
  radialGradient: SVGRadialGradientElement
  rect: SVGRectElement
  stop: SVGStopElement
  svg: SVGSVGElement
  text: SVGTextElement
  tspan: SVGTSpanElement
}

export type SVGKey = keyof SVGComponents