import cn from 'classnames';

import styles from './Button.module.css';

/**
 * @param {colorType}
 * @type {string}
 * @values { primary | secondary }
 */

const Button = ({
  children,
  className,
  link,
  type = 'button',
  colorType = 'primary',
  disabled = false,
  fullWidth = false,
  onClick = () => {},
  ...props
}) => {
  if (link && !disabled) {
    return (
      <a
        className={cn(
          styles.button,
          styles[colorType],
          { [styles.fullWidth]: fullWidth },
          className,
        )}
        href={link}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(styles.button, styles[colorType], className, {
        [styles.fullWidth]: fullWidth,
      })}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
