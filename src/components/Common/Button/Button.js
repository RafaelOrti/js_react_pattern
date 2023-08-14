import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, DefaultButton, OutlinedButton } from './ButtonStyles';

/**
 * Componente reutilizable de botón estilizado.
 *
 * Renderiza un botón estilizado con opciones de personalización.
 *
 * @component
 * @example
 * // Ejemplo de uso:
 * <Button variant="default" onClick={handleClick}>Enviar</Button>
 *
 * @param {ButtonProps} props - Propiedades del componente `Button`.
 * @returns {JSX.Element} Componente de botón estilizado.
 */
const Button = ({ variant, children, ...rest }) => {
  const ButtonComponent = variant === 'default' ? DefaultButton : OutlinedButton;

  return (
    <ButtonWrapper>
      {/* Renderiza el botón con las propiedades restantes */}
      <ButtonComponent {...rest}>{children}</ButtonComponent>
    </ButtonWrapper>
  );
};

/**
 * Propiedades del componente `Button`.
 *
 * @typedef {Object} ButtonProps
 * @property {string} [variant] - Variante del botón ('default', 'outlined', etc.).
 * @property {Function} [onClick] - Función de controlador de clic del botón.
 * @property {boolean} [disabled] - Indica si el botón está deshabilitado.
 */
Button.propTypes = {
  /**
   * Variante del botón ('default', 'outlined', etc.).
   */
  variant: PropTypes.oneOf(['default', 'outlined']),
  /**
   * Función de controlador de clic del botón.
   */
  onClick: PropTypes.func,
  /**
   * Indica si el botón está deshabilitado.
   */
  disabled: PropTypes.bool,
  /**
   * Contenido del botón.
   */
  children: PropTypes.node.isRequired,
};

/**
 * Valores predeterminados para las propiedades del componente `Button`.
 *
 * @type {ButtonProps}
 */
Button.defaultProps = {
  variant: 'default',
  onClick: () => {},
  disabled: false,
};

export default Button;




/////Ejemplo sin comentarios//////////////
// import React from 'react';
// import PropTypes from 'prop-types';
// import { DefaultButton, OutlinedButton } from './ButtonStyles';

// const Button = ({ children, onClick, variant, ...rest }) => {
//   const ButtonComponent = variant === 'outlined' ? OutlinedButton : DefaultButton;

//   const handleClick = (event) => {
//     if (onClick) {
//       onClick(event);
//     }
//     // Agregar más lógica personalizada de manejo de clic aquí si es necesario
//   };

//   return (
//     <ButtonComponent onClick={handleClick} {...rest}>
//       {children}
//     </ButtonComponent>
//   );
// };

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   variant: PropTypes.oneOf(['default', 'outlined']),
// disabled: PropTypes.bool,

// };

// Button.defaultProps = {
//   onClick: () => {},
//   variant: 'default',
// };

// export default Button;







//TO DO :VERION CON TODO INTEGRADO Y AÑADIEND EL METODO ONCLICK PERO ESTE NO SERIA NECESARIO REVISAR 
// import React from 'react';
// import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';

// const buttonStyles = css`
//   font-family: var(--font-family);
//   font-size: 1rem;
//   padding: 0.75rem 1.5rem;
//   border: none;
//   border-radius: var(--border-radius-md);
//   cursor: pointer;
//   transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

//   &:hover {
//     background-color: ${({ variant }) =>
//       variant === 'outlined'
//         ? 'var(--color-primary)'
//         : 'var(--color-secondary)'};
//     color: ${({ variant }) =>
//       variant === 'outlined' ? 'var(--color-primary)' : 'white'};
//   }
// `;

// const defaultStyles = css`
//   background-color: var(--color-primary);
//   color: white;
// `;

// const outlinedStyles = css`
//   background-color: transparent;
//   color: var(--color-primary);
//   border: 1px solid var(--color-primary);
// `;

// const StyledButton = styled.button`
//   ${buttonStyles}
//   ${({ variant }) => (variant === 'outlined' ? outlinedStyles : defaultStyles)}
// `;

// const Button = ({ children, onClick, variant, ...rest }) => {
//   return (
//     <StyledButton onClick={onClick} variant={variant} {...rest}>
//       {children}
//     </StyledButton>
//   );
// };

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   variant: PropTypes.oneOf(['default', 'outlined']),
// };

// Button.defaultProps = {
//   onClick: () => {},
//   variant: 'default',
// };

// export default Button;






// // const buttonStyles = css`
// //   font-family: var(--font-family);
// //   font-size: 1rem;
// //   padding: 0.75rem 1.5rem;
// //   border: none;
// //   border-radius: var(--border-radius-md);
// //   cursor: pointer;
// //   transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
// // `;

// // const defaultStyles = css`
// //   background-color: var(--color-primary);
// //   color: white;

// //   &:hover {
// //     background-color: var(--color-secondary);
// //   }
// // `;

// // const outlinedStyles = css`
// //   background-color: transparent;
// //   color: var(--color-primary);
// //   border: 1px solid var(--color-primary);

// //   &:hover {
// //     background-color: var(--color-primary);
// //     color: white;
// //   }
// // `;
