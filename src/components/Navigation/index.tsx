import logo from '../../static/images/arabic-casino.png'

const Navigation = (props: any) => {
    const { navigationItems } = props
    const renderDropdownItems = (parentID: any) => {
        return navigationItems
            .filter(
                (item: any) =>
                    item.menu_item_parent.toString() === parentID.toString()
            )
            .map((item: any) => (
                <li key={item.ID}>
                    <a href={'/' + item.slug}>{item.title}</a>
                    {renderDropdownItems(item.ID)}
                </li>
            ))
    }

    return (
        <header className="header u-d-flex u-align-center u-justify-between">
            <a href="/" className="header__logo">
                <img src={logo.src} alt="Arabic Casino" />
            </a>
            <nav className="nav-menu">
                <ul className="nav-menu__list u-d-flex u-align-center">
                    {navigationItems
                        .filter((item: any) => item.menu_item_parent === '0')
                        .map((item: any) => (
                            <li key={item.ID}>
                                <a
                                    href={'/' + item.slug}
                                    className="line-link line-link--grow"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
