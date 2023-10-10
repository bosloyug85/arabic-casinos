import Hero from '@/components/Hero'
import PartnersList from '@/components/PartnersList'

import ScrollSpy from '@/components/ScrollSpy'
import StickyNav from '@/components/StickyNav'
import '../../static/scss/main.scss'
import WhoIsModule from '@/components/WhoIs'
import HowWeRate from '@/components/HowWeRate'

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
            ) : module['acf_fc_layout'] === 'who_is_module' ? (
                <WhoIsModule
                    key={index}
                    title={module['title']}
                    description={module['text']}
                    textLeft={module['left_text']}
                    textRight={module['right_text']}
                />
            ) : module['acf_fc_layout'] === 'how_we_rate' ? (
                <HowWeRate
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    items={module['repeater']}
                />
            ) : null
        )
    }
}
