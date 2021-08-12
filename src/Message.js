const Message = (props) => {
    console.log(props)
    return <div className="myComponent">{props.textToShow}</div>
}
export default Message;