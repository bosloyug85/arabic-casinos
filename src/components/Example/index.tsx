type ExampleProps = {
    title?: string
    onClickHandler: () => void
}

const Example = (props: ExampleProps) => {
    const { title } = props

    return <h1>Example Component {title}</h1>
}

export default Example
