import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const StickyHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
`;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <StickyHeader />
    {children}
    <Footer />
  </>
);

export default Layout;
