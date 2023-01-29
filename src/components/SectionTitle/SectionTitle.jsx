import PropTypes from 'prop-types';
import { Section } from 'components/SectionTitle/SectionTitle.styled'

function SectionTitle({ title, children }) {
    return (
        <Section>
            <h1>{title}</h1>
                {children}
        </Section>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default SectionTitle;
