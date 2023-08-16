import Hero from '@/components/Hero'
import List from '@/components/List'

export const renderModules = (modules: any) => {
    if (modules) {
        return modules.map((module: any, index: number) =>
            module['acf_fc_layout'] === 'hero' ? (
                <Hero
                    key={index}
                    reverse="initial"
                    title={module['title']}
                    description={module['description']}
                    backgroundImage={module['image']}
                />
            ) : module['acf_fc_layout'] === 'reviews' ? (
                <List key={index} listItems={module['review']} />
            ) : null
        )
    }
}
