 
 import {FunElement} from './ElementMain';

 export const FunListmain = (props) => {
    const {AppMovies = []} = props;
    return (
        <div className='movies'>
            {AppMovies.length ? AppMovies.map(list => {return(
                <FunElement
                key = {list.imdbID}
                {...list}//Объект из FunElement:
                //const { Year, imdbID, Type, Poster, Title } = props; 
            />
            )
            }) : <h4 className='not_found'> Ничего не найдено </h4>
        } 
        </div>
    )
} 