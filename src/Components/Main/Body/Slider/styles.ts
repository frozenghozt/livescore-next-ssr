import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 200px;
  background: #213743;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 20px;
`

export const Image = styled.div`
  background-image: url('https://mediumrare.imgix.net/886b8e16e3d0b2c6c47e6ede61c21a8f87d21725456787e76e25d24211de0b62?auto=compress&fit=crop&w=512&h=221&dpr=1');
  background-size: cover;
  background-position: center;
  background-position-y: top;
  width: 50%;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  width: 50%;
  padding: 15px 2%;
  & p {
    color: rgb(177, 186, 211);
    font-size: 14px;
    margin: 10px 0px;
  }
`
