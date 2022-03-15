interface IHeaderProps  {
    title: string
}
export function Header(props: IHeaderProps) {
    return <h1>{props.title}</h1>;
}