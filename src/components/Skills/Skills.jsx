import {
  Sidebar,
  SidebarAddressItem,
  SidebarAddressLink,
  SidebarEl,
  SidebarElFigure,
  SidebarImg,
  SidebarInfo,
  SidebarList,
} from './Skills.styled';
import { MdAddIcCall, MdMarkEmailRead } from 'react-icons/md';
import { TbHomeHand } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export const Skills = () => {
  return (
    <Sidebar>
      <SidebarElFigure></SidebarElFigure>
      <SidebarImg src={require('images/IMG_8111.PNG')} alt={'candidat'} />
      <SidebarInfo>
        <div>
          <address>
            <ul>
              <SidebarAddressItem>
                <SidebarAddressLink href="mailto:info@devstudio.com">
                  <MdMarkEmailRead
                    size={20}
                    style={{ color: '#fff', marginRight: 10 }}
                  />
                  datsiukdmytro.o@gmail.com
                </SidebarAddressLink>
              </SidebarAddressItem>
              <li>
                <SidebarAddressLink href="tel:+380937714141">
                  <MdAddIcCall
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  +380 93 771 41 41
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink
                  href="https://www.google.com/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4598865,30.5717043,11z/data=!3m1!4b1!4m6!3m5!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.482526!4d30.7233095!16zL20vMGZmbXA"
                  target="_blank"
                  rel="noopener norefferer noreferrer"
                >
                  <TbHomeHand
                    size={20}
                    style={{ color: '#fff', marginRight: 10 }}
                  />
                  Ukraine - Odesa
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink
                  href="https://www.linkedin.com/in/dmytro-datsiuk-283673246/"
                  target="_blank"
                  rel="noopener norefferer noreferrer"
                >
                  <BsLinkedin
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  LinkedIn
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink
                  href="https://github.com/DmytroDatsiuk"
                  target="_blank"
                >
                  <BsGithub
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  GitHub
                </SidebarAddressLink>
              </li>
            </ul>
          </address>
          <h3>Hard Skills</h3>
          <SidebarList>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
          </SidebarList>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <SidebarList>
            <li>Organization</li>
            <li>Confidence</li>
            <li>Single-minded</li>
            <li>Communication</li>
            <li>Time Managment</li>
          </SidebarList>
        </div>
        <div>
          <h3>Languages</h3>
          <SidebarList>
            <li>English - advanced</li>
            <li>Ukranian - native</li>
          </SidebarList>
        </div>
      </SidebarInfo>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
    </Sidebar>
  );
};
