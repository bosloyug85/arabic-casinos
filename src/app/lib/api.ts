export async function getPageBySlug(slug: string) {
    const data = await fetch(
        `${process.env.API_BASE_URL}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`
    )
    const response = await data.json()
    return response
}

export async function getNavigationItemsByMenuSlug(menuSlug: string) {
    const data = await fetch(
        `${process.env.API_BASE_URL}/wp-json/get-menus/menu/${menuSlug}`
    )
    const response = await data.json()
    return response
}
