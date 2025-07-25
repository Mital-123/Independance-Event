
const Loader = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: "#ffdfc6" }}>
            <img src={require('../assets/images/logo.jpg')} alt="" height={150} width={150} className='zoom-animation object-fit-contain zoom-animation rounded-circle bg-light p-2' />
        </div>
    );
};

export default Loader;
