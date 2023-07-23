import Hero from '@/components/Hero'
import List from '@/components/List'

export const renderModules = (modules: any) => {
    if (modules) {
        return modules.map((module: any) =>
            module['acf_fc_layout'] === 'hero' ? (
                <Hero
                    title={module['title']}
                    description={module['description']}
                    backgroundImage={module['image']}
                />
            ) : module['acf_fc_layout'] === 'reviews' ? (
                <List listItems={module['review']} />
            ) : null
        )
    }
}
