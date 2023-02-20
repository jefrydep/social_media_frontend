import { socialMediaApi } from 'api';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from 'state';
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from '../store';


export const useAuthStore = () => {
    const [pageType, setPageType] = useState("login");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    // const { status, user, errorMessage } = useSelector( state => state.auth );
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        const navigate = useNavigate();
        try {
            const { data } = await socialMediaApi.post('/auth',{ email, password });
            dispatch(
                      setLogin({
                        user: data.user,
                        token: data.token,
                      })
                    );
                    if(user){
                        setPageType('login')
                    }
                    navigate('/home')
        } catch (error) {
            console.log(error);
        }
    }

    // const startRegister = async({ email, password, name }) => {
    //     dispatch( onChecking() );
    //     try {
    //         const { data } = await calendarApi.post('/auth/new',{ email, password, name });
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
    //     } catch (error) {
    //         dispatch( onLogout( error.response.data?.msg || '--' ) );
    //         setTimeout(() => {
    //             dispatch( clearErrorMessage() );
    //         }, 10);
    //     }
    // }


    // const checkAuthToken = async() => {
    //     const token = localStorage.getItem('token');
    //     if ( !token ) return dispatch( onLogout() );

    //     try {
    //         const { data } = await calendarApi.get('auth/renew');
    //         localStorage.setItem('token', data.token );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: data.name, uid: data.uid }) );
    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch( onLogout() );
    //     }
    // }

    // const startLogout = () => {
    //     localStorage.clear();
    //     dispatch( onLogoutCalendar() );
    //     dispatch( onLogout() );
    // }



    return {
        //* Propiedades
     
        isLogin,
        isRegister,
        user, 
        startLogin,

        //* Métodos
 
      
   
    
    }

}