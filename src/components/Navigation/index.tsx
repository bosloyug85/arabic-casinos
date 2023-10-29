import { useEffect, useState } from 'react'
import logo from '../../static/images/arabic-casino.png'
import { usePathname } from 'next/navigation'

const Navigation = (props: any) => {
    const { navigationItems } = props
    const pathName = usePathname()

    let items = navigationItems.pages

    const renderDropdownItems = (parentID: any) => {
        return items
            .filter(
                (item: any) => item.menu_item_parent === parentID.toString()
            )
            .map((item: any) => (
                <li key={item.object_id}>
                    <a href={'/' + item.slug}>{item.title}</a>
                    {renderDropdownItems(item.object_id)}
                </li>
            ))
    }

    return (
        <header
            className="header u-d-flex u-align-center u-justify-between js-header"
            role="navigation"
        >
            <div className="header__left">
                <a href="" className="header__logo">
                    <img
                        loading="lazy"
                        decoding="async"
                        src={logo.src}
                        width="276"
                        height="104"
                        alt=""
                    />
                </a>
            </div>

            <div className="header__center">
                <nav className="nav-menu js-nav">
                    <ul className="nav-menu__list u-d-flex u-align-center">
                        {items
                            .filter(
                                (item: any) => item.menu_item_parent === '0'
                            )
                            .map((item: any) => (
                                <li
                                    key={item.ID}
                                    className="nav-menu__list-item"
                                >
                                    <a
                                        href={'/' + item.slug}
                                        className={`nav-menu__link-item u-uppercase line-link line-link--grow ${
                                            pathName?.indexOf(item.slug) !== -1
                                                ? 'is-active'
                                                : ''
                                        }`}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>

            <div className="header__right">
                <button
                    type="button"
                    aria-label="Menu"
                    className="hamburger js-hamburger"
                >
                    <div className="hamburger__inner">
                        <span className="line line--1"></span>
                        <span className="line line--2"></span>
                        <span className="line line--3"></span>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Navigation
