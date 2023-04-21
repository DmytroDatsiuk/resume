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
  left: -280px;
  width: 250px;
  height: 230px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  border-radius: 0 0 50% 50%;
  background-color: #fff;
`;
export const SidebarImg = styled.img`
  position: relative;
  left: 10px;
  width: 300px;
  border-radius: 50%;
`;

export const SidebarInfo = styled.div`
  margin-left: 30px;
  margin-bottom: 8px;
`;

export const SidebarAddressItem = styled.li`
  align-items: center;
`;

export const SidebarAddressLink = styled.a`
  color: #fff;

  &:hover {
    color: #a8a3a3;
  }
`;

export const SidebarList = styled.ul`
  /* margin-left: 30px; */
  /* list-style: disc;
  color: #fff; */
`;

export const SidebarEl = styled.div`
  width: 300px;
  height: 40px;
  background-color: #fff;
  margin-right: 20px;

  border-radius: 0 20px 20px 0;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const Transperent = styled.span`
  color: transparent;
`;
