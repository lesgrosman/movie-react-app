import * as yup from 'yup'

export type LoginForm = {
  username: string
  password: string
}

export const initValues: LoginForm = {
  username: '',
  password: '',
}

export const schema = yup.object({
  username: yup.string().required('Please enter username'),
  password: yup.string().required('Please enter your password'),
})
