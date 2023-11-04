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
import TableBlock from '@/components/TableBlock'
import InfoBlock from '@/components/InfoBlock'
import ReviewTables from '@/components/ReviewTables'

export const renderModules = (modules: any) => {
    if (modules) {
        return modules.map((module: any, index: number) =>
            module['acf_fc_layout'] === 'atf_blocks_–_atf_element' ? (
                <Hero
                    key={index}
                    title={module['title']}
                    content={module['content']}
                    bgImage={module['background_image']}
                    btnText={module['link']['title']}
                    btnHref={module['link']['url']}
                />
            ) : module['acf_fc_layout'] === 'h2_-_block_with_description' ? (
                <GeneralTitle
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    leftAlign={module['left_align']}
                />
            ) : module['acf_fc_layout'] === 'left_title' ? (
                <LeftTitle
                    key={index}
                    title={module['title']}
                    description={module['description']}
                />
            ) : module['acf_fc_layout'] === 'partner_listing_version_1' ? (
                <PartnersList key={index} listItems={module['items']} />
            ) : module['acf_fc_layout'] === 'jumplink_element' ? (
                <ScrollSpy key={index} items={module['items']} />
            ) : module['acf_fc_layout'] === 'fact_box_content_block' ? (
                <BoxContentBlock
                    key={index}
                    content={module['fact']}
                    title={module['quote']}
                />
            ) : module['acf_fc_layout'] === 'content_listing_block' ? (
                <ContentListingBlock
                    key={index}
                    reverse={module['reverse_every_second_element']}
                    items={module['items']}
                    disable_cta={module['disable_cta']}
                />
            ) : module['acf_fc_layout'] === 'display_block' ? (
                <CardSlider
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    items={module['items']}
                />
            ) : module['acf_fc_layout'] === 'content_tiles' ? (
                <SmallCardsGrid key={index} items={module['items']} />
            ) : module['acf_fc_layout'] ===
              'alternating_coloured_content_block' ? (
                <TipsForBeginners
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    tips={module['items']}
                />
            ) : module['acf_fc_layout'] === 'wide_cards_grid' ? (
                <WideCardsGrid
                    key={index}
                    title={module['title']}
                    description={module['description']}
                    cards={module['cards']}
                />
            ) : module['acf_fc_layout'] ===
              'multiple_content_comparison_block' ? (
                <PaymentMethod key={index} items={module['items']} />
            ) : module['acf_fc_layout'] === 'faq_content_block' ? (
                <FaqBlock
                    key={index}
                    title={module['title']}
                    faqs={module['items']}
                />
            ) : module['acf_fc_layout'] === 'author_block' ? (
                <Author
                    key={index}
                    title={module['title']}
                    image={module['image']}
                    description={module['content']}
                />
            ) : module['acf_fc_layout'] === 'casino_bonus_listing' ? (
                <CasinoBonusListing key={index} items={module['items']} />
            ) : module['acf_fc_layout'] === 'basic_content_block' ? (
                <SimpleContentBlock
                    key={index}
                    title={module['title']}
                    content={module['text']}
                    highlight={module['highlight']}
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
            ) : module['acf_fc_layout'] ===
              'content_block_with_image_and_background' ? (
                <SimpleContentDouble
                    key={index}
                    top_title={module['top_title']}
                    top_content={module['top_content']}
                    bottom_title={module['bottom_title']}
                    bottom_content={module['bottom_content']}
                    bottom_image={module['bottom_image']}
                />
            ) : module['acf_fc_layout'] ===
              'single_casino_card_content_block' ? (
                <MultiCasinoCardContentBlock
                    key={index}
                    title={module['title']}
                    small_title={module['short_description']}
                    top_content={module['list_title']}
                    bottom_list={module['list_items']}
                    items={module['cards']}
                />
            ) : module['acf_fc_layout'] === 'table_content_block' ? (
                <TableContentBlock
                    key={index}
                    title={module['title']}
                    content={module['content']}
                    table_left_col_title={module['left_col_title']}
                    table_right_col_title={module['right_col_title']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'mobile_casino_app_block' ? (
                <TextImageCta key={index} items={module['items']} />
            ) : module['acf_fc_layout'] === 'comparison_table_content_block' ? (
                <ComparisonTableContent
                    key={index}
                    title={module['title']}
                    text={module['content']}
                    list={module['bullets']}
                    table_head_columns={module['table_head_columns']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'vip_loyalty_contrast' ? (
                <VipLoyaltyContrast
                    key={index}
                    title={module['title']}
                    description={module['description']}
                />
            ) : module['acf_fc_layout'] === 'single_bonus_listing_block' ? (
                <CasinoBonusSingle
                    key={index}
                    banner_items={module['items']}
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
                    content={module['description']}
                    table_head_columns={module['table_head_columns']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'table_block' ? (
                <TableBlock
                    key={index}
                    table_head_columns={module['table_head_columns']}
                    table_rows={module['table_rows']}
                />
            ) : module['acf_fc_layout'] === 'info_block' ? (
                <InfoBlock
                    key={index}
                    logo={module['logo']}
                    title={module['title']}
                    review_title={module['review_-_title']}
                    description={module['description']}
                    review_description={module['review_-_description']}
                    review={module['review']}
                    button={module['button']}
                />
            ) : module['acf_fc_layout'] === 'review_tables_block' ? (
                <ReviewTables
                    key={index}
                    table_head_columns={module['table_head_columns']}
                    table_rows={module['table_rows']}
                    big_table={module['big_table']}
                />
            ) : null
        )
    }
}
