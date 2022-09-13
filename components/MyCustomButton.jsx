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
