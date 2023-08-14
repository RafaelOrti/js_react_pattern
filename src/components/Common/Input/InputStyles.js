import styled from 'styled-components';

// Estilos del contenedor del campo de entrada
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

// Estilos de la etiqueta del campo de entrada
export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

// Estilos del campo de entrada
export const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-background);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
}`;
