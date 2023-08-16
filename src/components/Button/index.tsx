const Button = (props: any) => {
    const { className, icon, href, target, name, dataAttr, btnText, type } =
        props

    let passedClassName = 'btn'

    if (className) {
        passedClassName += ` ${className}`
    }

    if (icon) {
        passedClassName += ' btn--icon'
    }

    return (
        <>
            {href ? (
                <a
                    className={passedClassName}
                    target={target ?? ''}
                    aria-label={name ?? ''}
                    href={href}
                >
                    <span className="btn__text">
                        {btnText}
                        {icon ? (
                            <span className="btn__icon">{icon}</span>
                        ) : null}
                    </span>
                </a>
            ) : (
                <button
                    type={type ?? 'button'}
                    aria-label={name ?? ''}
                    className={
                        'btn ' + className ?? '' + icon ? 'btn--icon' : ''
                    }
                >
                    <span className="btn__text">
                        {btnText}
                        {icon ? (
                            <span className="btn__icon">{icon}</span>
                        ) : null}
                    </span>
                </button>
            )}
        </>
    )
}

export default Button
