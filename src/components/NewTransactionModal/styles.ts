import styled from 'styled-components';

interface TypeButtonContainerProps {
  isActive: boolean;
  activeColor: string;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

      h2 {
        color: var(--title);
        margin-bottom: 2rem;
  }

  input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;

      border-radius: 0.25rem;

      background-color: var(--input-background);
      border: 1px solid var(--input-border);

      font-size: 16px;

      margin-bottom: 1rem;

      &::placeholder {
        color: var(--text);
      }
  }

  > button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background-color: var(--green);
    color: var(--white);
    border: 0;
    border-radius: 0.25rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const TypeButton = styled.button<TypeButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  height: 4rem;
  width: calc(50% - 0.5rem);
  border-radius: 0.25rem;

  background-color: ${(props) => props.isActive 
    ? `var(--${props.activeColor}-light)`
    : 'transparent'};
  
  border: 1px solid var(--input-border);

  > img {
    margin-right: 0.5rem;
  }
`;