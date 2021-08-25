import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th{
          font-weight: 400;
          padding: 1rem 2rem;
          line-height: 1.5rem;
          text-align: left;
      }

      td{
          border: 0;
          padding: 1rem 2rem;
          line-height: 1.5rem;
          text-align: left;
          background: var(--white);

          border-radius: 0.25rem;

          &:first-child{
            color: var(--title);
          }

          &.deposit{
              color: var(--green);
          }

          &.withdraw {
              color: var(--red); 
          }
      }
  }
`;