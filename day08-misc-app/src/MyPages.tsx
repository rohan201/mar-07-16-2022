import { Link, useParams } from "react-router-dom";

export const Menu = () => {
    return (<nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/books">Library</Link></li>
        </ul>
    </nav>);
}
export const Home = () => {
    return (<div><Menu/> <br/>Welcome to home page</div>);
};

export const Contact = () => {
    return (<div><Menu/> <br/>You can reach me at xyz@mail.com</div>);
};

export const BookList = () => {
    return (<div> 
        <Menu/>
        <h4>Book list</h4>
        <ul>
            <li>Ajax hacks <Link to="/bookdetails/ajax">Details</Link></li>
            <li>Being harsh<Link to="/bookdetails/harsh">Details</Link></li>
            <li>Programming Kotlin<Link to="/bookdetails/Kotlin">Details</Link></li>
        </ul>
    </div>);
}

export const BookDetails = () => {
    let {title} = useParams();
    return (<div>
        <Menu/>
        <br/>
        <h2>Details for {title}</h2>
        <h4>Name: {title}</h4>    
    </div>);
}