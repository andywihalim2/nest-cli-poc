import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from 'react';

export type ButtonRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export type ColorVariant = string;

export type SizeVariant = string;

export type ButtonProps<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C;
  block?: boolean;
  color?: ColorVariant;
  children?: ReactNode;
  disabled?: boolean;
  icon?: ReactElement;
  loading?: boolean;
  size?: SizeVariant;
  variant?: 'ghost' | 'text';
}

export type ButtonComponent = <C extends ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: ButtonRef<C> }
) => ReactNode;
