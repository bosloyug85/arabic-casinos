import Hero from '@/components/Hero'
import PartnersList from '@/components/PartnersList'

import ScrollSpy from '@/components/ScrollSpy'
import StickyNav from '@/components/StickyNav'
import CardSlider from '@/components/CardSlider'
import SmallCardsGrid from '@/components/SmallCardsGrid'
import TipsForBeginners from '@/components/TipsForBeginners'
import WideCardsGrid from '@/components/WideCardsGrid'
import PaymentMethod from '@/components/PaymentMethod'
import GeneralTitle from '@/components/GeneralTitle'
import FaqBlock from '@/components/FaqBlock'
import Author from '@/components/Author'
import LeftTitle from '@/components/LeftTitle'
import CasinoBonusListing from '@/components/CasinoBonusListing'
import SimpleContentBlock from '@/components/SimpleContentBlock'
import BoxContentBlock from '@/components/BoxContentBlock'
import BasicCardsBlock from '@/components/BasicCardsBlock'
import TextImage from '@/components/TextImage'
import ContentListingBlock from '@/components/ContentListingBlock'
import SimpleContentDouble from '@/components/SimpleContentDouble'
import MultiCasinoCardContentBlock from '@/components/MultiCasinoCardContentBlock'
import TableContentBlock from '@/components/TableContentBlock'
import TextImageCta from '@/components/TextImageCta'
import ComparisonTableContent from '@/components/ComparisonTableContent'
import VipLoyaltyContrast from '@/components/VipLoyaltyContrast'
import CasinoBonusSingle from '@/components/CasinoBonusSingle'
import TypeTableBlock from '@/components/TypeTableBlock'
import TableSimple from '@/components/TableSimple'
import WhyContentBlock from '@/components/WhyContentBlock'

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
            ) : module['acf_fc_layout'] === 'general_title' ? (
                <GeneralTitle
                    key={index}
                    title={module['title']}
                    description={module['description']}
                />
            ) : module['acf_fc_layout'] === 'left_title' ? (
                <LeftTitle
                    key={index}
                    title={module['title']}
                    description={module['description']}
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
                <BoxContentBlock
                    key={index}
                    content={module['left_text']}
                    title={module['right_text']}
                />
            ) : module['acf_fc_layout'] === 'how_we_rate' ? (
                <ContentListingBlock key={index} items={module['repeater']} />
            ) : module['acf_fc_layout'] === 'card_slider' ? (
                <CardSlider
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    items={module['slider']}
                />
            ) : module['acf_fc_layout'] === 'small_cards_grid' ? (
                <SmallCardsGrid
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    items={module['cards']}
                />
            ) : module['acf_fc_layout'] === 'tips_for_beginners' ? (
                <TipsForBeginners
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    tips={module['tips']}
                />
            ) : module['acf_fc_layout'] === 'wide_cards_grid' ? (
                <WideCardsGrid
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    cards={module['cards']}
                />
            ) : module['acf_fc_layout'] === 'payment_methods' ? (
                <PaymentMethod
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    items={module['items']}
                />
            ) : module['acf_fc_layout'] === 'faq_block' ? (
                <FaqBlock
                    key={index}
                    title={module['title']}
                    faqs={module['faqs']}
                />
            ) : module['acf_fc_layout'] === 'author' ? (
                <Author
                    key={index}
                    title={module['title']}
                    image={module['image']}
                    description={module['description']}
                />
            ) : module['acf_fc_layout'] === 'casino_bonus_listing' ? (
                <CasinoBonusListing key={index} items={module['items']} />
            ) : module['acf_fc_layout'] === 'simple_content_block' ? (
                <SimpleContentBlock
                    key={index}
                    title={module['title']}
                    content={module['content']}
                />
            ) : module['acf_fc_layout'] === 'basic_cards_block' ? (
                <BasicCardsBlock key={index} cards={module['cards']} />
            ) : module['acf_fc_layout'] === 'text_image' ? (
                <TextImage
                    key={index}
                    title={module['title']}
                    text={module['text']}
                    image={module['image']}
                />
            ) : module['acf_fc_layout'] === 'simple_content_double' ? (
                <SimpleContentDouble
                    key={index}
                    top_title={module['top_banner_-_title']}
                    top_content={module['top_banner_-_text']}
                    bottom_title={module['bottom_banner_-_title']}
                    bottom_content={module['bottom_banner_-_text']}
                    bottom_image={module['bottom_banner_-_image']}
                />
            ) : module['acf_fc_layout'] ===
              'multi_casino_card_content_block' ? (
                <MultiCasinoCardContentBlock
                    key={index}
                    title={module['title']}
                    small_title={module['small_title']}
                    top_content={module['top_content']}
                    bottom_list={module['bottom_list']}
                    items={module['items']}
                />
            ) : module['acf_fc_layout'] === 'table_content_block' ? (
                <TableContentBlock
                    key={index}
                    title={module['title']}
                    content={module['content']}
                    table_left_col_title={module['table_left_col_title']}
                    table_right_col_title={module['table_right_col_title']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'text_image_cta' ? (
                <TextImageCta key={index} items={module['items']} />
            ) : module['acf_fc_layout'] === 'comparison_table_content' ? (
                <ComparisonTableContent
                    key={index}
                    title={module['title']}
                    text={module['text']}
                    list={module['list']}
                    first_col_title={module['first_col_title']}
                    second_col_title={module['second_col_title']}
                    third_col_title={module['third_col_title']}
                    fourth_col_title={module['fourth_col_title']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'vip_loyalty_contrast' ? (
                <VipLoyaltyContrast
                    key={index}
                    title={module['title']}
                    description={module['description']}
                />
            ) : module['acf_fc_layout'] === 'casino_bonus_single' ? (
                <CasinoBonusSingle
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    banner_items={module['banner_items']}
                    cta_title={module['cta_title']}
                    cta_gold={module['cta_gold']}
                    cta={module['cta']}
                />
            ) : module['acf_fc_layout'] === 'type_table_block' ? (
                <TypeTableBlock
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    first_col_title={module['first_col_title']}
                    second_col_title={module['second_col_title']}
                    third_col_title={module['third_col_title']}
                    fourth_col_title={module['fourth_col_title']}
                    fifth_col_title={module['fifth_col_title']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'table_simple' ? (
                <TableSimple
                    key={index}
                    first_col_title={module['first_col_title']}
                    second_col_title={module['second_col_title']}
                    third_col_title={module['third_col_title']}
                    fourth_col_title={module['fourth_col_title']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'why_content_block' ? (
                <WhyContentBlock
                    key={index}
                    title={module['title']}
                    content={module['content']}
                />
            ) : null
        )
    }
}
