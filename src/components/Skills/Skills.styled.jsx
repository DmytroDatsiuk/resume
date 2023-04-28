import styled from 'styled-components';

export const Sidebar = styled.aside`
  display: block;
  background-color: #545454;
  color: #f8f2f2;
  /* width: 370px; */
  /* padding-top: 240px; */
`;
export const SidebarElFigure = styled.div`
  position: absolute;
  top: 0;
  left: -198px;
  width: 250px;
  height: 33px;
  margin-right: auto;
  margin-left: auto;
  /* margin-bottom: 80px; */

  /* border-radius: 0 0 50% 50%; */
  background-color: #ffffffa6;
`;
export const SidebarImg = styled.img`
  position: relative;
  top: 30px;
  left: 25px;
  width: 270px;
  height: 345.16px;
  border: 3px solid #ffffffa6;
  border-radius: 5px;
`;

export const SidebarInfo = styled.div`
  margin-top: 55px;
  margin-left: 30px;
  margin-bottom: 100px;
`;

export const SidebarAddressItem = styled.li`
  align-items: center;
`;

export const SidebarAddressLink = styled.a`
  color: #fff;
  font-style: normal;

  &:hover {
    color: #a8a3a3;
  }
`;

export const SidebarList = styled.ul`
  margin-left: 30px;
  list-style: disc;
  color: #fff;
`;

export const SidebarEl = styled.div`
  width: 300px;
  height: 40px;
  background-color: #ffffffa6;
  margin-right: 20px;
  border-radius: 0 20px 20px 0;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const Transperent = styled.span`
  color: transparent;
`;
