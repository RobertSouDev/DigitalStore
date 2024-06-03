import { FaSearch } from 'react-icons/fa';


function InputD() {
    return ( 
    <div className="input-container">
        <input type="text" className="search-input" placeholder="Digite sua pesquisa..." />
        <FaSearch className="input-icon" />
    </div>
     );
}

export default InputD;