import { ComponentFactoryGlamorous } from './glamorous-component'

import { StyleArgument } from './style-arguments'

// # built-in DOM - component factories glamorous.div

export interface BuiltInGlamorousComponentFactory<ElementProps, Properties>
  extends ComponentFactoryGlamorous<ElementProps, object, object, Properties> {}

// # dom tag - component factories glamorous('div')

// ## without propsAreCssOverides

export interface KeyGlamorousComponentFactory<ElementProps, Properties, ExternalProps, DefaultProps>
  extends ComponentFactoryGlamorous<
    ElementProps & ExternalProps,
    ExternalProps,
    Partial<DefaultProps>,
    Properties
  > {}

// ## with propsAreCssOverides

export interface KeyGlamorousComponentFactoryCssOverides<ElementProps, Properties, ExternalProps, DefaultProps>
  extends ComponentFactoryGlamorous<
    ElementProps & ExternalProps,
    ExternalProps & Properties,
    Partial<DefaultProps>,
    Properties
  > {}


// # react component - component factories glamorous(Component)

// ## without propsAreCssOverides

export interface GlamorousComponentFactory<ExternalProps, Properties, DefaultProps>
  extends ComponentFactoryGlamorous<
    ExternalProps,
    ExternalProps,
    Partial<DefaultProps>,
    Properties
  > {}

// ## with propsAreCssOverides
export interface GlamorousComponentFactoryCssOverides<ExternalProps, Properties, DefaultProps>
  extends ComponentFactoryGlamorous<
    ExternalProps,
    ExternalProps & Properties,
    Partial<DefaultProps>,
    Properties
  > {}