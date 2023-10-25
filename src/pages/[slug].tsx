import '../static/scss/main.scss'
import { renderModules } from '@/app/helpers/utils'
import { getNavigationItemsByMenuSlug, getPageBySlug } from '@/app/lib/api'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import RootLayout from '@/components/RootLayout'
import Footer from '@/components/Footer'
import Head from 'next/head'

export const getServerSideProps = async ({ params }: any) => {
    const page = await getPageBySlug(params.slug)
    const navigationItems = await getNavigationItemsByMenuSlug('header-menu')
    return { props: { page, navigationItems } }
}

const Page = (props: any) => {
    const { page, navigationItems } = props
    let data = page[0]
    let acf = data?.acf
    let modules = acf?.modules
    let yoast = data?.yoast_head_json

    if (!acf) {
        return 'no page found'
    }

    return (
        <RootLayout>
            <Head>
                <title>{yoast.title}</title>
                <meta name="title" content={yoast.title} />
                <meta name="description" content={yoast.description} />
            </Head>
            <Navigation navigationItems={navigationItems} />
            {renderModules(modules)}
            <Footer />
        </RootLayout>
    )
}

export default Page
