import {
  Sidebar,
  SidebarAddressItem,
  SidebarAddressLink,
  SidebarEl,
  SidebarElFigure,
  SidebarImg,
  SidebarInfo,
  SidebarList,
  Transperent,
} from './Skills.styled';
import { MdAddIcCall, MdMarkEmailRead } from 'react-icons/md';
import { TbHomeHand } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';

export const Skills = () => {
  return (
    <Sidebar>
      <SidebarElFigure></SidebarElFigure>
      <SidebarImg src={require('./photo.jpg')} alt={'candidat'} />
      <SidebarInfo>
        <h2>Dmytro Datsiuk</h2>

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
                  м. Київ, пр-т Лесі Українки, 26
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink href="https://www.linkedin.com/in/dmytro-datsiuk-283673246/">
                  <BsLinkedin
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  linkedin profile
                </SidebarAddressLink>
              </li>
            </ul>
          </address>
          <h3>Hard Skills</h3>
          <SidebarList>
            <li>
              <AiFillHtml5
                size={20}
                style={{ color: '#fff', marginRight: 10 }}
              />
              HTML
            </li>
            <li>
              <FaCss3Alt size={20} style={{ color: '#fff', marginRight: 10 }} />
              CSS
            </li>
            <li>
              <IoLogoJavascript
                size={20}
                style={{ color: '#fff', marginRight: 10 }}
              />
              JavaScript
            </li>
            <li>
              <SiTypescript
                size={20}
                style={{ color: '#fff', marginRight: 10 }}
              />
              TypeScript
            </li>
            <li>
              <FaReact size={20} style={{ color: '#fff', marginRight: 10 }} />
              React
            </li>
          </SidebarList>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>
              <b>- -</b> <Transperent>...</Transperent>
              Organization
            </li>
            <li>
              <b>- -</b> <Transperent>...</Transperent>Confidence
            </li>
            <li>
              <b>- -</b> <Transperent>...</Transperent>Single-minded
            </li>
            <li>
              <b>- -</b> <Transperent>...</Transperent>Communication
            </li>
            <li>
              <b>- -</b> <Transperent>...</Transperent>Time Managment
            </li>
          </ul>
        </div>
        <div>
          <h3>LANGUAGES</h3>
          <ul>
            <li>
              <b>- -</b> <Transperent>...</Transperent>English - advanced
            </li>
            <li>
              <b>- -</b> <Transperent>...</Transperent>Ukranian - based
            </li>
            <li>
              <b>- -</b> <Transperent>...</Transperent>Rassian - crash
            </li>
          </ul>
        </div>
      </SidebarInfo>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
    </Sidebar>
  );
};
