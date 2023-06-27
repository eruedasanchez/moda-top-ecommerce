const TarjetaPresentacion = ({name,description,img}) => {
    return(
        <div>
            <img src={img} alt="nombre"/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TarjetaPresentacion;


