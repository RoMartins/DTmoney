import styled from "styled-components";

export const Container = styled.main`
margin-top: 1rem;

table {
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align-last: start;

  }

  td {
    padding: 1rem 2.2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }

    &.income {
      color: var(--red);
    }

    &.outcome {
      color: var(--green)
    }

  }
}


`
