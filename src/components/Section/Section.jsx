import PropTypes from 'prop-types';
import { Titel, Block } from "./Section.styled";

export const Section = ({ title, children }) => (
  <Block>
    <Titel>{title}</Titel>
    {children}
  </Block>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]).isRequired,
}