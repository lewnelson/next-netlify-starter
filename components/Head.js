import NextHead from 'next/head'
import { MazeSnippet } from '@components/MazeSnippet';

const Head = ({ children }) => (
  <NextHead>
    <MazeSnippet />
    {children}
  </NextHead>
);

export default Head;
