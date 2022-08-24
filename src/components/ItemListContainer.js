const ItemListContainer = (props)=>{
    console.log('props', props.children)
    return(
        <div style={{background:'black', borderRadius:"3px", margin:'7px', padding:"7px"}}>
            <p>{props.mensaje}</p>
            {props.children}
        </div>
    )
}

export default ItemListContainer;