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
        <nav>
            <ul>
                {navigationItems
                    .filter((item: any) => item.menu_item_parent === '0')
                    .map((item: any) => (
                        <li key={item.ID}>
                            <a href={'/' + item.slug}>{item.title}</a>
                            <ul>{renderDropdownItems(item.ID)}</ul>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Navigation
