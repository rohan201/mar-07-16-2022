interface IFooterProps {
    year: number;
}
export const Footer = (props: IFooterProps) => <h6>Copyrights reserved, {props.year}</h6>