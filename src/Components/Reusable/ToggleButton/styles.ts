import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 100px;
  height: 26px;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 28px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  &::after {
    content: 'All';
    color: #fff;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 50px;
    height: 24px;
    margin: 2px 2px;
    background: ${props => props.theme.dark.backgroundMatches};
    transition: 0.3s;
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 5px;
  width: 80px;
  height: 28px;
  &:checked + ${CheckBoxLabel} {
    background: rgba(255, 255, 255, 0.2);
    &::after {
      display: flex;
      font-size: 13px;
      justify-content: center;
      align-items: center;
      content: 'Live';
      color: #fff;
      border-radius: 5px;
      width: 50px;
      height: 24px;
      margin: 2px;
      margin-left: calc(100% - 52px);
      transition: 0.3s;
    }
  }
`
