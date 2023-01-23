import PropTypes from 'prop-types';

function SectionTitle({ title, children }) {
    return (
        <section>
            <h1>{title}</h1>
                {children}
        </section>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default SectionTitle;
