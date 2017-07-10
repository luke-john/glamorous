// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react'

import {
  HTMLComponentFactory,
  SVGComponentFactory,
} from './built-in-component-factories'
import {
  GlamorousComponent,
  ExtraGlamorousProps,
} from './glamorous-component'
import {
  GlamorousComponentFactory,
} from './component-factory'
import { CSSProperties } from './css-properties'
import { SVGProperties } from './svg-properties'

export {
  CSSProperties,
  ExtraGlamorousProps,
  GlamorousComponent,
  HTMLComponentFactory,
  GlamorousComponentFactory,
  SVGComponentFactory,
}

export interface GlamorousOptions {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>

export interface Config {
  useDisplayNameInClassName: boolean
}

export interface GlamorousInterface extends HTMLComponentFactory, SVGComponentFactory {
  <Props>(
    component:Component<Props>,
    options?: GlamorousOptions,
  ): GlamorousComponentFactory<Props, CSSProperties>
  <Props>(
    component:Component<Props>,
    options?: GlamorousOptions,
  ): GlamorousComponentFactory<Props, SVGProperties>

  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps>
  Svg: React.StatelessComponent<React.SVGAttributes<any> & ExtraGlamorousProps>

  config: Config
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

export function withTheme<ExternalProps, Theme>(
  component: React.ComponentClass<ExternalProps & { theme: Theme }>
): React.ComponentClass<ExternalProps>

export function withTheme<ExternalProps, Theme>(
  component: React.StatelessComponent<ExternalProps & { theme: Theme }>
): React.StatelessComponent<ExternalProps>

declare const glamorous: GlamorousInterface

export default glamorous
