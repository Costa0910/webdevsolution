import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Collapsible.scss';

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="collapsible">
            <div className="collapsible__header" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span className={`collapsible__icon ${isOpen ? 'open' : ''}`}>
                    —
                </span>
            </div>
            <div className={`collapsible__content ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

Collapsible.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Collapsible;