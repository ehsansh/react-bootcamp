function DogList(props) {
    return (
        <div>
            <h1 className='display-1 text-center'>dog list</h1>
            <div className='container'>
                <div className='row'>
                    {props.dogs.map(d => (
                        <div key={d.name} className='col-lg-4 text-center'>
                            <img width='75%' src={d.src} alt={d.name} />
                            <h3>{d.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DogList;
