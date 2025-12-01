import { useState, useId } from 'react';
import PropTypes from 'prop-types';
import '../Collapsible.scss';

const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const id = useId();

    const toggle = () => setIsOpen(v => !v);
    const onKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <div className="collapsible">
            <div
                className="collapsible__header"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`collapsible-content-${id}`}
                onClick={toggle}
                onKeyDown={onKeyDown}
            >
                <h2>{title}</h2>
                <span className={`collapsible__icon ${isOpen ? 'open' : ''}`} aria-hidden="true">
                    —
                </span>
            </div>
            <div
                id={`collapsible-content-${id}`}
                className={`collapsible__content ${isOpen ? 'open' : ''}`}
            >
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