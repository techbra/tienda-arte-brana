const ItemListContainer = (props)=>{
    console.log('props', props.children)
    return(
        <div style={{background:'Gray', borderRadius:"1px", margin:'20px', padding:"20px"}}>
            <p>{props.mensaje}</p>
            {props.children}
        </div>
    )
}

export default ItemListContainer;