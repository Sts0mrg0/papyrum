import styled, { css } from 'styled-components';

interface Props {
  status: string;
}

enum status {
  DEPRECATED = 'deprecated',
  READY = 'ready',
  DEVELOPMENT = 'development',
}

export const Label = styled.div`
  line-height: 22px;
  padding: 0 8px;
  font-size: 14px;
  color: #383d41;
  background-color: #E2E3E5;
  font-weight: 700;
  border-radius: 10px;
  margin-right: 15px;
  ${(props: Props) => props.status === status.DEVELOPMENT && css`
    color: #004085;
    background-color: #CCE5FF;
  `}
  ${(props: Props) => props.status === status.READY && css`
    color: #155724;
    background-color: #D4EDDA;
  `}
  ${(props: Props) => props.status === status.DEPRECATED && css`
    color: #721C24;
    background-color: #F8D7DA;
  `}
`;

export const TabWrapper = styled.div`
  height: 35px;
  min-height: 35px;
  background-color:  ${props => props.theme.colors.backgroundMenu};
  border-bottom: 1px solid ${props => props.theme.colors.borderMenu};
  transition: all .3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TabItem = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.textMenu};
  padding: 0 15px;
  cursor: pointer;
  ${(props) => props.active && css`
    color: #00A8FF;
  `}
`;

export const IconWrapper = styled.button`
  position: relative;
  padding: 0 15px;
  align-items: center;
  display: flex;
  border: 0;
  background: transparent;
  cursor: pointer;
  z-index: 1;
  > svg {
    transition: all ease .2s;
    stroke: ${props => props.theme.colors.textMenu};
  }
  &:hover > svg {
    stroke: #00A8FF;
  }
  div {
    text-align: left;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 15px;
  border-left: 1px solid #DBDBDB;
`;