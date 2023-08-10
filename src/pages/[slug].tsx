import '../static/scss/main.scss'
import { renderModules } from '@/app/helpers/utils'
import { getNavigationItemsByMenuSlug, getPageBySlug } from '@/app/lib/api'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'

export const getServerSideProps = async ({ params }: any) => {
    const page = await getPageBySlug(params.slug)
    const navigationItems = await getNavigationItemsByMenuSlug('header-menu')
    return { props: { page, navigationItems } }
}

const Page = (props: any) => {
    const { page, navigationItems } = props
    let data = page[0]
    let acf = data.acf
    let modules = acf.modules
    console.log('acf', modules)
    console.log('navigation items ', navigationItems)
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: data.yoast_head }}></div>
            <Navigation navigationItems={navigationItems} />
            <h1>{data.title.rendered}</h1>
            {renderModules(modules)}
            <Card image="image" title="Title" description="Description" />
        </div>
    )
}

export default Page
