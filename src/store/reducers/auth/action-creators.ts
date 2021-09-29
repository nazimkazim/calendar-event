import { IUser } from '../../../models/IUser';
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction } from './types';
import { AppDispatch } from '../../index';
import axios from 'axios';
export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
  setIsLoading: (loading: boolean): SetLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: loading }),
  setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async () => {
        const response = await axios.get<IUser[]>("./users.json")
        const mockUser = response
          .data
          .find(user => user.username === username && user.password === password)
        if (mockUser) {
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', mockUser.username)
          dispatch(AuthActionCreators.setIsAuth(true))
          dispatch(AuthActionCreators.setUser(mockUser))
        } else {
          dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
        }
        dispatch(AuthActionCreators.setIsLoading(false))
      }, 1000)

    } catch (error) {
      dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      dispatch(AuthActionCreators.setUser({} as IUser))
      dispatch(AuthActionCreators.setIsAuth(false))
    } catch (error) {
      console.log(error)
    }
  }
}