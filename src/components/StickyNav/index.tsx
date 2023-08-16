const StickyNav = (props: any) => {
    const { items } = props
    return (
        <nav className="sticky-nav">
            <ul className="sticky-nav__list">
                {items &&
                    items.map((item: any) => (
                        <li className="sticky-nav__list-item">
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default StickyNav
