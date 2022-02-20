import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import { useState } from "react";



export const NavbarMovies = ( props ) => {

    const { handleSearch } = props;
    const [movie, setMovie] = useState({ props })
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const  [ formValues, handleInputChange ] = useForm({
        searchText: q,
    })

    const { searchText } = formValues;

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">    
                <div className="container-fluid">
                    <input 
                        className="form-control me-2" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search"
                        name="searchText"
                        value={ searchText }
                        onChange={handleInputChange}
                    />
                    <button 
                        className="btn btn-outline-success" 
                        onClick={() => 
                        handleSearch(searchText)}
                    >Search</button>
                    <div className="scollapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
