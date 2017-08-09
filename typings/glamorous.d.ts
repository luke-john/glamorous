// Type definitions for Glamorous v3.2.0
// Project: https://github.com/paypal/glamorous
// Definitions by: Kok Sam <https://github.com/sammkj>

import * as React from 'react'
import {
  HTMLComponentFactory,
  HTMLComponents,
  HTMLKey,
  SVGComponentFactory,
  SVGComponents,
  SVGKey,
} from './built-in-component-factories'
import {
  HTMLDomTagComponentFactories,
  SVGDomTagComponentFactories,
} from './dom-tag-component-factories'
import {
  ExtraGlamorousProps,
  WithComponent, WithProps,
  ComponentFactoryGlamorous,
  ComponentGlamorous,
} from './glamorous-component'
import {
  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
  KeyGlamorousComponentFactoryCssOverides,
  GlamorousComponentFactory,
  GlamorousComponentFactoryCssOverides,
} from './component-factory'
import {
  CSSProperties,
  CSSPropertiesCompleteSingle,
  CSSPropertiesComplete,
  CSSPropertiesPseudo,
  CSSPropertiesLossy,
} from './css-properties'
import {
  SVGProperties,
  SVGPropertiesCompleteSingle,
  SVGPropertiesComplete,
  SVGPropertiesLossy,
} from './svg-properties'
import {
  StyleFunction,
  StyleArray,
  StyleArgument,
} from './style-arguments'

import { Omit } from './helpers'

export {
  CSSProperties,
  CSSPropertiesCompleteSingle, CSSPropertiesComplete, CSSPropertiesPseudo, CSSPropertiesLossy,
  SVGProperties,
  SVGPropertiesCompleteSingle, SVGPropertiesComplete, SVGPropertiesLossy,

  ExtraGlamorousProps,
  WithComponent, WithProps,
  ComponentFactoryGlamorous,
  ComponentGlamorous,

  StyleFunction,
  StyleArray,
  StyleArgument,

  Omit,

  BuiltInGlamorousComponentFactory,
  KeyGlamorousComponentFactory,
  KeyGlamorousComponentFactoryCssOverides,
  GlamorousComponentFactory,
  GlamorousComponentFactoryCssOverides,

  HTMLComponentFactory,
  HTMLComponents,
  HTMLKey,
  SVGComponentFactory,
  SVGComponents,
  SVGKey,

  HTMLDomTagComponentFactories,
  SVGDomTagComponentFactories,
}

export interface GlamorousOptions<Props, Context, DefaultProps> {
  displayName: string
  rootEl: string | Element
  forwardProps: String[]
  shouldClassNameUpdate:
    (props: Props, prevProps: Props, context: Context, prevContext: Context) => boolean
  propsAreCssOverrides?: false
  withProps: DefaultProps
}

export interface PropsAreCssOverridesGlamorousOptions<Props, Context, DefaultProps> {
  displayName?: string
  rootEl?: string | Element
  forwardProps?: String[]
  shouldClassNameUpdate?:
    (props: Props, prevProps: Props, context: Context, prevContext: Context) => boolean
  propsAreCssOverrides: true
  withProps?: DefaultProps
}

export type Component<T> = React.ComponentClass<T> | React.StatelessComponent<T>

type GlamorousProps = { className?: string }

export interface GlamorousInterface {
  // # Glamarous Component factories
  
  // Two overloads are needed per shape due to a union return of CSSProperties | SVGProperties
  // resulting in a loss of typesafety on function arguments

  // ## create a component factory from your own component
  
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): GlamorousComponentFactory<ExternalProps, CSSProperties, DefaultProps>
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: Partial<GlamorousOptions<ExternalProps, Context, DefaultProps>>,
  ): GlamorousComponentFactory<ExternalProps, SVGProperties, DefaultProps>

  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: PropsAreCssOverridesGlamorousOptions<ExternalProps, Context, DefaultProps>,
  ): GlamorousComponentFactoryCssOverides<ExternalProps, CSSProperties, DefaultProps>
  <ExternalProps, Context = object, DefaultProps extends object = object>(
    component: Component<ExternalProps & GlamorousProps>,
    options?: PropsAreCssOverridesGlamorousOptions<ExternalProps, Context, DefaultProps>,
  ): GlamorousComponentFactoryCssOverides<ExternalProps, SVGProperties, DefaultProps>

  // ## create a component factory from a dom tag

  Div: React.StatelessComponent<CSSProperties & ExtraGlamorousProps>
  Svg: React.StatelessComponent<SVGProperties & ExtraGlamorousProps>
}

interface ThemeProps {
  theme: object
}

export class ThemeProvider extends React.Component<ThemeProps, any> { }

export function withTheme<Props extends { theme: any }>(
  component: React.ComponentClass<Props>
): React.ComponentClass<
  Omit<Props, "theme">
>

export function withTheme<Props extends { theme: any }>(
  component: React.StatelessComponent<Props>
): React.StatelessComponent<
  Omit<Props, "theme">
>

declare const glamorous:
  & HTMLComponentFactory
  & SVGComponentFactory
  & GlamorousInterface
  & HTMLDomTagComponentFactories
  & SVGDomTagComponentFactories

export default glamorous
