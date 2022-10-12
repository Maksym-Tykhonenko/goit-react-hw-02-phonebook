import { Titel, Block } from "./Section.styled";

export const Section = ({ title, children }) => (
  <Block>
    <Titel>{title}</Titel>
    {children}
  </Block>
);