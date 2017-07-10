import { SVGAttributes } from 'react'

import { CSSProperties } from './css-properties'
import { SVGProperties } from './svg-properties'
import {
  GlamorousComponentFactory,
} from './component-factory'

export type HtmlStyledFunction<
  HTMLElement,
  Properties
> = GlamorousComponentFactory<React.HTMLProps<HTMLElement>, Properties>


export type SvgStyledFunction<
  SVGElement,
  Attributes
> = GlamorousComponentFactory<React.SVGAttributes<SVGElement>, Attributes>


export interface HTMLComponentFactory {
  a: HtmlStyledFunction<HTMLAnchorElement, CSSProperties>
  abbr: HtmlStyledFunction<HTMLElement, CSSProperties>
  address: HtmlStyledFunction<HTMLElement, CSSProperties>
  area: HtmlStyledFunction<HTMLAreaElement, CSSProperties>
  article: HtmlStyledFunction<HTMLElement, CSSProperties>
  aside: HtmlStyledFunction<HTMLElement, CSSProperties>
  audio: HtmlStyledFunction<HTMLAudioElement, CSSProperties>
  b: HtmlStyledFunction<HTMLElement, CSSProperties>
  base: HtmlStyledFunction<HTMLBaseElement, CSSProperties>
  bdi: HtmlStyledFunction<HTMLElement, CSSProperties>
  bdo: HtmlStyledFunction<HTMLElement, CSSProperties>
  big: HtmlStyledFunction<HTMLElement, CSSProperties>
  blockquote: HtmlStyledFunction<HTMLElement, CSSProperties>
  body: HtmlStyledFunction<HTMLBodyElement, CSSProperties>
  br: HtmlStyledFunction<HTMLBRElement, CSSProperties>
  button: HtmlStyledFunction<HTMLButtonElement, CSSProperties>
  canvas: HtmlStyledFunction<HTMLCanvasElement, CSSProperties>
  caption: HtmlStyledFunction<HTMLElement, CSSProperties>
  cite: HtmlStyledFunction<HTMLElement, CSSProperties>
  code: HtmlStyledFunction<HTMLElement, CSSProperties>
  col: HtmlStyledFunction<HTMLTableColElement, CSSProperties>
  colgroup: HtmlStyledFunction<HTMLTableColElement, CSSProperties>
  data: HtmlStyledFunction<HTMLElement, CSSProperties>
  datalist: HtmlStyledFunction<HTMLDataListElement, CSSProperties>
  dd: HtmlStyledFunction<HTMLElement, CSSProperties>
  del: HtmlStyledFunction<HTMLElement, CSSProperties>
  details: HtmlStyledFunction<HTMLElement, CSSProperties>
  dfn: HtmlStyledFunction<HTMLElement, CSSProperties>
  dialog: HtmlStyledFunction<HTMLElement, CSSProperties>
  div: HtmlStyledFunction<HTMLDivElement, CSSProperties>
  dl: HtmlStyledFunction<HTMLDListElement, CSSProperties>
  dt: HtmlStyledFunction<HTMLElement, CSSProperties>
  em: HtmlStyledFunction<HTMLElement, CSSProperties>
  embed: HtmlStyledFunction<HTMLEmbedElement, CSSProperties>
  fieldset: HtmlStyledFunction<HTMLFieldSetElement, CSSProperties>
  figcaption: HtmlStyledFunction<HTMLElement, CSSProperties>
  figure: HtmlStyledFunction<HTMLElement, CSSProperties>
  footer: HtmlStyledFunction<HTMLElement, CSSProperties>
  form: HtmlStyledFunction<HTMLFormElement, CSSProperties>
  h1: HtmlStyledFunction<HTMLHeadingElement, CSSProperties>
  h2: HtmlStyledFunction<HTMLHeadingElement, CSSProperties>
  h3: HtmlStyledFunction<HTMLHeadingElement, CSSProperties>
  h4: HtmlStyledFunction<HTMLHeadingElement, CSSProperties>
  h5: HtmlStyledFunction<HTMLHeadingElement, CSSProperties>
  h6: HtmlStyledFunction<HTMLHeadingElement, CSSProperties>
  head: HtmlStyledFunction<HTMLHeadElement, CSSProperties>
  header: HtmlStyledFunction<HTMLElement, CSSProperties>
  hgroup: HtmlStyledFunction<HTMLElement, CSSProperties>
  hr: HtmlStyledFunction<HTMLHRElement, CSSProperties>
  html: HtmlStyledFunction<HTMLHtmlElement, CSSProperties>
  i: HtmlStyledFunction<HTMLElement, CSSProperties>
  iframe: HtmlStyledFunction<HTMLIFrameElement, CSSProperties>
  img: HtmlStyledFunction<HTMLImageElement, CSSProperties>
  input: HtmlStyledFunction<HTMLInputElement, CSSProperties>
  ins: HtmlStyledFunction<HTMLModElement, CSSProperties>
  kbd: HtmlStyledFunction<HTMLElement, CSSProperties>
  keygen: HtmlStyledFunction<HTMLElement, CSSProperties>
  label: HtmlStyledFunction<HTMLLabelElement, CSSProperties>
  legend: HtmlStyledFunction<HTMLLegendElement, CSSProperties>
  li: HtmlStyledFunction<HTMLLIElement, CSSProperties>
  link: HtmlStyledFunction<HTMLLinkElement, CSSProperties>
  main: HtmlStyledFunction<HTMLElement, CSSProperties>
  map: HtmlStyledFunction<HTMLMapElement, CSSProperties>
  mark: HtmlStyledFunction<HTMLElement, CSSProperties>
  menu: HtmlStyledFunction<HTMLElement, CSSProperties>
  menuitem: HtmlStyledFunction<HTMLElement, CSSProperties>
  meta: HtmlStyledFunction<HTMLMetaElement, CSSProperties>
  meter: HtmlStyledFunction<HTMLElement, CSSProperties>
  nav: HtmlStyledFunction<HTMLElement, CSSProperties>
  noscript: HtmlStyledFunction<HTMLElement, CSSProperties>
  object: HtmlStyledFunction<HTMLObjectElement, CSSProperties>
  ol: HtmlStyledFunction<HTMLOListElement, CSSProperties>
  optgroup: HtmlStyledFunction<HTMLOptGroupElement, CSSProperties>
  option: HtmlStyledFunction<HTMLOptionElement, CSSProperties>
  output: HtmlStyledFunction<HTMLElement, CSSProperties>
  p: HtmlStyledFunction<HTMLParagraphElement, CSSProperties>
  param: HtmlStyledFunction<HTMLParamElement, CSSProperties>
  picture: HtmlStyledFunction<HTMLElement, CSSProperties>
  pre: HtmlStyledFunction<HTMLPreElement, CSSProperties>
  progress: HtmlStyledFunction<HTMLProgressElement, CSSProperties>
  q: HtmlStyledFunction<HTMLQuoteElement, CSSProperties>
  rp: HtmlStyledFunction<HTMLElement, CSSProperties>
  rt: HtmlStyledFunction<HTMLElement, CSSProperties>
  ruby: HtmlStyledFunction<HTMLElement, CSSProperties>
  s: HtmlStyledFunction<HTMLElement, CSSProperties>
  samp: HtmlStyledFunction<HTMLElement, CSSProperties>
  script: HtmlStyledFunction<HTMLElement, CSSProperties>
  section: HtmlStyledFunction<HTMLElement, CSSProperties>
  select: HtmlStyledFunction<HTMLSelectElement, CSSProperties>
  small: HtmlStyledFunction<HTMLElement, CSSProperties>
  source: HtmlStyledFunction<HTMLSourceElement, CSSProperties>
  span: HtmlStyledFunction<HTMLSpanElement, CSSProperties>
  strong: HtmlStyledFunction<HTMLElement, CSSProperties>
  style: HtmlStyledFunction<HTMLStyleElement, CSSProperties>
  sub: HtmlStyledFunction<HTMLElement, CSSProperties>
  summary: HtmlStyledFunction<HTMLElement, CSSProperties>
  sup: HtmlStyledFunction<HTMLElement, CSSProperties>
  table: HtmlStyledFunction<HTMLTableElement, CSSProperties>
  tbody: HtmlStyledFunction<HTMLTableSectionElement, CSSProperties>
  td: HtmlStyledFunction<HTMLTableDataCellElement, CSSProperties>
  textarea: HtmlStyledFunction<HTMLTextAreaElement, CSSProperties>
  tfoot: HtmlStyledFunction<HTMLTableSectionElement, CSSProperties>
  th: HtmlStyledFunction<HTMLTableHeaderCellElement, CSSProperties>
  thead: HtmlStyledFunction<HTMLTableSectionElement, CSSProperties>
  time: HtmlStyledFunction<HTMLElement, CSSProperties>
  title: HtmlStyledFunction<HTMLTitleElement, CSSProperties>
  tr: HtmlStyledFunction<HTMLTableRowElement, CSSProperties>
  track: HtmlStyledFunction<HTMLTrackElement, CSSProperties>
  u: HtmlStyledFunction<HTMLElement, CSSProperties>
  ul: HtmlStyledFunction<HTMLUListElement, CSSProperties>
  "var": HtmlStyledFunction<HTMLElement, CSSProperties>
  video: HtmlStyledFunction<HTMLVideoElement, CSSProperties>
  wbr: HtmlStyledFunction<HTMLElement, CSSProperties>
}

export interface SVGComponentFactory {
  circle: SvgStyledFunction<SVGCircleElement, SVGProperties>
  clipPath: SvgStyledFunction<SVGClipPathElement, SVGProperties>
  defs: SvgStyledFunction<SVGDefsElement, SVGProperties>
  ellipse: SvgStyledFunction<SVGEllipseElement, SVGProperties>
  g: SvgStyledFunction<SVGGElement, SVGProperties>
  image: SvgStyledFunction<SVGImageElement, SVGProperties>
  line: SvgStyledFunction<SVGLineElement, SVGProperties>
  linearGradient: SvgStyledFunction<SVGLinearGradientElement, SVGProperties>
  mask: SvgStyledFunction<SVGMaskElement, SVGProperties>
  path: SvgStyledFunction<SVGPathElement, SVGProperties>
  pattern: SvgStyledFunction<SVGPatternElement, SVGProperties>
  polygon: SvgStyledFunction<SVGPolygonElement, SVGProperties>
  polyline: SvgStyledFunction<SVGPolylineElement, SVGProperties>
  radialGradient: SvgStyledFunction<SVGRadialGradientElement, SVGProperties>
  rect: SvgStyledFunction<SVGRectElement, SVGProperties>
  stop: SvgStyledFunction<SVGStopElement, SVGProperties>
  svg: SvgStyledFunction<SVGSVGElement, SVGProperties>
  text: SvgStyledFunction<SVGTextElement, SVGProperties>
  tspan: SvgStyledFunction<SVGTSpanElement, SVGProperties>
}
