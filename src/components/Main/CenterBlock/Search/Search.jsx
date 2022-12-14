import '../../../../App.css'
import search from '../../../../img/icon/search.svg'

function Search(){
    return(
        <div className='centerblock__search search'>
            <svg className="search__svg">
                <use xlinkHref={search}/>
            </svg>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
    )
}

export default Search;