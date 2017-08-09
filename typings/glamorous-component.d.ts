import { CSSProperties } from './css-properties'

import { Component } from './glamorous'

import { Omit } from './helpers.d'

import { StyleArgument } from './style-arguments'

/**
* `glamorousComponentFactory` returns a ComponentClass
*
* @see {@link https://github.com/paypal/glamorous/blob/master/src/create-glamorous.js#L28-L131}
*/

export type ExtraGlamorousProps = {
  innerRef?: (instance: any) => void;

  className?: string;
  css?: CSSProperties;
  theme?: object;
}
export interface WithComponent<
  ExternalProps,
  InternalProps,
  DefaultProps,
  StyleProperties,
  Props
> {
  withComponent: (
      component: string | Component<ExternalProps & InternalProps & Partial<DefaultProps>>
    ) =>
      & React.ComponentClass<
        & ExtraGlamorousProps
        & Props
        & DefaultProps
        & InternalProps
        & ExternalProps
      >
      & WithComponent<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props>
      & WithProps<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props>
}

export interface WithProps<
  ExternalProps,
  InternalProps,
  DefaultProps,
  StyleProperties,
  Props
> {
    withProps: <AdditionalDefaultProps extends object>(
      props: AdditionalDefaultProps
    ) =>
      & React.ComponentClass<
        & ExtraGlamorousProps
        & Props
        & DefaultProps & Partial<AdditionalDefaultProps>
        & InternalProps
        & ExternalProps
      >
      & WithComponent<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props>
      & WithProps<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props>
}

/**
 * ExternalProps: Props that should be on the Glamorous Component
 * InternalProps: Props that are used by style arguments (and passed through to WithComponent)
 * DefaultProps: Props that are used by style arguments and are optional on the Glamorous Component
 * StyleProperties: What the style argument should match
 */

export type ComponentGlamorous<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props> =
  & React.ComponentClass<
    & ExtraGlamorousProps
    & Props
    & DefaultProps
    & InternalProps
    & ExternalProps
  >
  & WithComponent<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props>
  & WithProps<ExternalProps, InternalProps, DefaultProps, StyleProperties, Props>

export interface ComponentFactoryGlamorous<
  ExternalProps,
  InternalProps,
  DefaultProps,
  StyleProperties
> {
  <Props extends { theme: object }>(
    ...styles: StyleArgument<StyleProperties, InternalProps & Props & DefaultProps>[]
  ):
    ComponentGlamorous<
      ExternalProps, InternalProps, DefaultProps, StyleProperties,
      Omit<Props, 'theme'>
    >

    <Props>(
    ...styles: StyleArgument<StyleProperties, InternalProps & Props & DefaultProps>[]
  ):
    ComponentGlamorous<
      ExternalProps, InternalProps, DefaultProps, StyleProperties,
      Props
    >
}