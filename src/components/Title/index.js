import './title.css';

export default function Title({children, name}) {
    return(
        <div className="Title">
            {children}
            <span>{name}</span>
        </div>
    )
}