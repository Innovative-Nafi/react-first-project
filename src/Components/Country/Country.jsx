import "./Country.css"

const Country = ({bus}) => {
    console.log(bus)
    const { name, flags, area, population} = bus

    return (
        <div className="Country">
            <h2>Name: {name.common}</h2>
            <img src="{flags.png}" alt=""/>
            <p>Area:{area}</p>
            <p>Population:{population}</p>
        </div>
    );
};

export default Country;