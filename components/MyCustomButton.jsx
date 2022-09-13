import PropTypes from "prop-types";

export const MyCustomButton = ({ children, disabled, large, rounded }) => {
    let baseButtonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4";

    if (rounded) {
        baseButtonClass = `${baseButtonClass} rounded`
    }

    if (disabled) {
        baseButtonClass = `${baseButtonClass} opacity-50`
    }

    if (large) {
        baseButtonClass = `${baseButtonClass} w-full`
    }

    return <button disabled={disabled} className={baseButtonClass}>
        {children}
    </button>
}

MyCustomButton.propTypes = {
    /**
     * The children of the button, normally the label
     */
    children: PropTypes.string,
    /**
     * Disables the button
     */
    disabled: PropTypes.bool,
    /**
     * Renders the button full width
     */
    large: PropTypes.bool,
    /**
     * Gives the button round edges
     */
    rounded: PropTypes.bool,
};
