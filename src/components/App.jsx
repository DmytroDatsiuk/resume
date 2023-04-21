import { About } from './About/About';
import { GlobalStyle } from './GlobalStyle';
import { Flex, Layout } from './Layout';
import { Skills } from './Skills/Skills';
// import { TitleBox } from './Header/TitleBox';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      {/* <TitleBox /> */}
      <Flex>
        <About />
        <Skills />
      </Flex>
    </Layout>
  );
};
