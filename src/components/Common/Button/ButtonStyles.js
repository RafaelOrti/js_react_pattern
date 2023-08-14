import styled, { css } from 'styled-components';

// Estilos comunes para todos los botones
const buttonBaseStyles = css`
  font-family: var(--font-family);
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'outlined'
        ? 'var(--color-primary)'
        : 'var(--color-secondary)'};
    color: ${({ variant }) =>
      variant === 'outlined' ? 'var(--color-primary)' : 'white'};
  }
`;

// Botón con estilo predeterminado
export const DefaultButton = styled.button`
  ${buttonBaseStyles}
  background-color: var(--color-primary);
  color: white;
`;

// Botón con estilo de contorno
export const OutlinedButton = styled.button`
  ${buttonBaseStyles}
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
`;

// Agrega más estilos de botones aquí si es necesario
