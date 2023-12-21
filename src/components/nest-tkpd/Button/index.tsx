import { forwardRef, memo } from 'react';
import type { ElementType } from 'react';
import css from './style.module.scss';
import type { ButtonComponent, ButtonProps, ButtonRef } from './type';
import cx from '../utils/sx';

const _Button = forwardRef(<C extends ElementType = 'button'>(props: ButtonProps<C>, ref: ButtonRef<C>) => {
  const { as, block, color, children, className, disabled, icon, loading, size, type, variant, ...restProps } = props;
  const Tag = as || 'button';

  return (
    <Tag
      ref={ref}
      {...restProps}
      className={cx(css.button, className)}
      data-n-block={block ? '' : undefined}
      data-n-color={color}
      data-n-disabled={disabled ? '' : undefined}
      data-n-loading={loading ? '' : undefined}
      data-n-size={size}
      data-n-variant={variant}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      type={type || (type || Tag === 'button' ? 'button' : type)}
    >
      {loading && <div className={css.loading} />}
      <span className={css.main}>
        {icon}
        {children}
      </span>
    </Tag>
  );
});

_Button.displayName = 'Button';

const Button: ButtonComponent = memo(_Button);

export default Button;
