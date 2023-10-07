import Hero from '@/components/Hero'
import PartnersList from '@/components/PartnersList'

import ScrollSpy from '@/components/ScrollSpy'
import StickyNav from '@/components/StickyNav'

export const renderModules = (modules: any) => {
    if (modules) {
        return modules.map((module: any, index: number) =>
            module['acf_fc_layout'] === 'hero' ? (
                <Hero
                    key={index}
                    title={module['title']}
                    content={module['description']}
                    bgImage={module['image']}
                    btnText={module['button']['title']}
                    btnHref={module['button']['url']}
                />
            ) : module['acf_fc_layout'] === 'reviews' ? (
                <PartnersList
                    key={index}
                    title={module['title']}
                    listItems={module['review']}
                />
            ) : module['acf_fc_layout'] === 'sticky_nav' ? (
                <ScrollSpy key={index} items={module['sticky_nav']} />
            ) : null
        )
    }
}
