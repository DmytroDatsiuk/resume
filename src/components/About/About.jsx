import {
  Description,
  Main,
  Summary,
  Box,
  Title,
  EducationBox,
  Desc,
  ProjectBox,
  Case,
  ProjectDesc,
} from './About.styled';
import { HiChatBubbleLeftEllipsis, HiAcademicCap } from 'react-icons/hi2';
import { RiAdminFill } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';

// BsGithub

export const About = () => {
  return (
    <Main>
      <Summary>
        <Title>Summary</Title>
        <Box>
          <HiChatBubbleLeftEllipsis size={70} color="#D9D9D9" />
          <Description>
            I am an experienced and passionate Front-End developer with
            knowledge of HTML, CSS, JavaScript and React. I have a proven track
            record of utilizing the Agile /Scrum methodology to successfully
            deliver projects on time, within budget and with a focus on user-
            friendliness. I thrive in challenging and dynamic environments where
            I can help make a positive difference to both everyday life and
            business with my creative problem-solving skills. I am a fast
            learner, responsible and always up for a challenge.
          </Description>
        </Box>
      </Summary>
      <div>
        <Title>Work Expirience</Title>
        <Box>
          <RiAdminFill size={75} color="#D9D9D9" />
          <ul>
            <li>
              <h4>System administrator</h4>
              <p>July 2018 - up to now | Ukraine</p>
              <ul>
                <li>Armed Forces of Ukraine</li>
              </ul>
            </li>
          </ul>
        </Box>
      </div>
      <Case>
        <Title>Project Expirience</Title>
        <Box>
          <BsGithub size={70} color="#D9D9D9" />
          <ProjectBox>
            <h4>IceCream</h4>
            <ProjectDesc>[Parcel, SCSS, JS]</ProjectDesc>
            <Desc>
              Ice company website with responsive layout, burger menu, modal
              window and attractive design. Role: Developer
            </Desc>
          </ProjectBox>
        </Box>
        <Box>
          <BsGithub size={70} color="#D9D9D9" />
          <ProjectBox>
            <h4>Phonebook</h4>
            <ProjectDesc>
              [React (Hooks, Routers, Redux, Redux Toolkit)]
            </ProjectDesc>
            <Desc>
              A simple phonebook connected to Swagger backend API - you can
              register, log in, add, remove or filter contacts, log out. Role:
              Developer.
            </Desc>
          </ProjectBox>
        </Box>
        <Box>
          <BsGithub size={70} color="#D9D9D9" />
          <ProjectBox>
            <h4>Filmoteka,</h4>
            <ProjectDesc>
              [HTML, SASS, JS, Handlebars, REST API, AJAX, Parcel]
            </ProjectDesc>
            <Desc>
              Application for choosing a movie. Role: Scrum-master,developer App
              component with Public and Private routes, AuthPage page logic.
              Deploy project on Netlify. Role: Developer
            </Desc>
          </ProjectBox>
        </Box>
      </Case>
      <Case>
        <Title>Education</Title>
        <Box>
          <HiAcademicCap size={80} color="#D9D9D9" />
          <EducationBox>
            <h4>
              Military Institute of Telecommunications and Informatization
            </h4>
            <h5>Information Systems and Technology</h5>
            <p>Master's degree</p>
            <p>September 2013 - June 2018 | Ukraine</p>
          </EducationBox>
        </Box>
      </Case>
      <Case>
        <Title>Certificates</Title>
        <Box>
          <TbCertificate size={80} color="#D9D9D9" />
          <ul>
            <li>
              <h4>freeCodeCapmp</h4>
              <h5>JavaScript</h5>
              <p>January 2023</p>
            </li>
          </ul>
        </Box>
      </Case>
    </Main>
  );
};
