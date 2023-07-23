export async function getPageBySlug(slug: string) {
    const data = await fetch(
        `http://localhost:8888/arabic-casino-wordpress/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`
    )
    const response = await data.json()
    return response
}

export async function getNavigationItemsByMenuSlug(menuSlug: string) {
    const data = await fetch(
        `http://localhost:8888/arabic-casino-wordpress/wp-json/get-menus/menu/${menuSlug}`
    )
    const response = await data.json()
    return response
}
