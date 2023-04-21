import { Title, TitleName } from './TitleBox.styled';
import { MdAddIcCall, MdMarkEmailRead } from 'react-icons/md';
import { TbHomeHand } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';

export const TitleBox = () => {
  return (
    <Title>
      <TitleName>Dmytro Datsiuk</TitleName>
      <address>
        <ul>
          <li>
            <a href="mailto:info@devstudio.com">
              <MdMarkEmailRead />
              datsiukdmytro.o@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+380937714141">
              <MdAddIcCall />
              +380 93 771 41 41 //{' '}
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4598865,30.5717043,11z/data=!3m1!4b1!4m6!3m5!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.482526!4d30.7233095!16zL20vMGZmbXA"
              target="_blank"
              rel="noopener norefferer noreferrer"
            >
              <TbHomeHand />
              м. Київ, пр-т Лесі Українки, 26
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dmytro-datsiuk-283673246/">
              <BsLinkedin />
              linkedin profile
            </a>
          </li>
        </ul>
      </address>
    </Title>
  );
};
