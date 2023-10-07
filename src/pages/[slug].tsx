import '../static/scss/main.scss'
import { renderModules } from '@/app/helpers/utils'
import { getNavigationItemsByMenuSlug, getPageBySlug } from '@/app/lib/api'
import Navigation from '@/components/Navigation'
import Card from '@/components/Card'
import { Plus_Jakarta_Sans, Kanit } from 'next/font/google'
import RootLayout from '@/components/RootLayout'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const kanit = Kanit({ subsets: ['latin'], weight: ['500', '600'] })

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
    // console.log('acf', modules)
    // console.log('navigation items ', navigationItems)
    return (
        <RootLayout>
            <Navigation navigationItems={navigationItems} />
            {renderModules(modules)}
        </RootLayout>
    )
}

export default Page
