import Link from 'next/link';
import styled from 'styled-components/macro';

const Nav = () => (
   <header
      css={`
         height: 60px;
         width: 100vw;
         background: #07c;
         border-bottom: 1px solid;
         border-color: #07c;
      `}
   >
      <nav
         css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 960px;
            margin: 0;
            margin: 0 auto;
            height: 100%;
         `}
      >
         <Link href='/'>
            <a
               css={`
                  font-weight: bold;
                  font-size: 2rem;
                  cursor: pointer;
               `}
            >
               Note App
            </a>
         </Link>

         <Link href='/notes'>
            <a
               css={`
                  color: #000;
                  font-size: 2rem;
                  cursor: pointer;
               `}
            >
               notes
            </a>
         </Link>
      </nav>
   </header>
);

export default Nav;
