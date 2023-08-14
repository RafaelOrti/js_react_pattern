import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, Label, StyledInput } from './InputStyles';

/**
 * Componente reutilizable de campo de entrada estilizado.
 *
 * Renderiza un campo de entrada estilizado, opcionalmente con una etiqueta.
 *
 * @component
 * @example
 * // Ejemplo de uso:
 * <Input label="Nombre" placeholder="Ingrese su nombre" />
 *
 * @param {InputProps} props - Propiedades del componente `Input`.
 * @returns {JSX.Element} Componente de campo de entrada estilizado.
 */
const Input = ({ label, ...rest }) => {
  return (
    <InputWrapper>
      {/* Renderiza la etiqueta si se proporciona */}
      {label && <Label>{label}</Label>}
      {/* Renderiza el campo de entrada con las propiedades restantes */}
      <StyledInput {...rest} />
    </InputWrapper>
  );
};

/**
 * Propiedades del componente `Input`.
 *
 * @typedef {Object} InputProps
 * @property {string} [label] - Etiqueta del campo de entrada (opcional).
 * @property {string} [placeholder] - Texto de marcador de posición para el campo de entrada.
 * @property {string} [value] - Valor actual del campo de entrada.
 * @property {Function} [onChange] - Función de controlador de cambio del campo de entrada.
 */
Input.propTypes = {
  /**
   * Etiqueta del campo de entrada (opcional).
   */
  label: PropTypes.string,
  /**
   * Texto de marcador de posición para el campo de entrada.
   */
  placeholder: PropTypes.string,
  /**
   * Valor actual del campo de entrada.
   */
  value: PropTypes.string,
  /**
   * Función de controlador de cambio del campo de entrada.
   */
  onChange: PropTypes.func,
};

export default Input;



////////////////////////////////////VERSION SIMPLE pero con un solo parametro//
// import React from 'react';
// import PropTypes from 'prop-types';
// import { InputWrapper, Label, StyledInput } from './InputStyles';

// const Input = ({ label, ...rest }) => {
//   return (
//     <InputWrapper>
//       {label && <Label>{label}</Label>}
//       <StyledInput {...rest} />
//     </InputWrapper>
//   );
// };

// Input.propTypes = {
//   label: PropTypes.string,
///  placeholder: PropTypes.string,
  // value: PropTypes.string,
  // onChange: PropTypes.func,
// };

// export default Input;



//////////////////////////////////////////////////////

// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// // Estilos para el contenedor del input
// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1.5rem;
// `;

// // Estilos para la etiqueta del input
// const Label = styled.label`
//   font-size: 0.9rem;
//   margin-bottom: 0.5rem;
// `;

// // Estilos para el input
// const StyledInput = styled.input`
//   padding: 0.75rem 1rem;
//   border: 1px solid var(--color-border);
//   border-radius: var(--border-radius-sm);
//   font-size: 1rem;
//   color: var(--color-text);
//   background-color: var(--color-background);
//   transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   &:focus {
//     outline: none;
//     border-color: var(--color-primary);
//     box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
//   }
// `;

// const Input = ({ label, ...rest }) => {
//   return (
//     <InputWrapper>
//       {label && <Label>{label}</Label>}
//       <StyledInput {...rest} />
//     </InputWrapper>
//   );
// };

// Input.propTypes = {
//   label: PropTypes.string,
// };

// export default Input;
