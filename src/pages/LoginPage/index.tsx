import { FormProvider, useForm } from 'react-hook-form'
import { LoginForm, initValues, schema } from './utils'
import { useAuth } from '@utils/hooks/useAuth'
import { useAuthContext } from 'context/useAuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@components/Button'
import Container from '@components/Container'
import TextInput from '@components/Form/TextInput'

const Login = () => {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const { session } = useAuthContext()

  useEffect(() => {
    if (session) {
      router.push('/profile')
    }
  }, [session])

  const methods = useForm<LoginForm>({
    defaultValues: initValues,
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const handleSubmit = methods.handleSubmit((data: LoginForm) => {
    login(data)
  })

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <div className='flex w-full h-full'>
            <div className='flex flex-col justify-center h-screen max-w-2xl w-full mx-auto'>
              <h1 className='text-center text-emerald-500 mb-2'>Log in</h1>
              <div className='mb-4 flex flex-col'>
                <span className='text-gray-400 text-center'>
                  Login with your credentials in&nbsp;
                  <a
                    href='https://www.themoviedb.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-emerald-500 underline cursor-pointer'
                  >
                    TMDB
                  </a>
                </span>
                <span className='text-gray-400 text-center'>
                  Please make sure you have an active account on&nbsp;
                  <a
                    href='https://www.themoviedb.org/login'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-emerald-500 underline cursor-pointer'
                  >
                    TMDB
                  </a>
                </span>
              </div>

              <TextInput name='username' label='Username' />
              <TextInput name='password' type='password' label='Password' />
              <div className='flex w-full justify-end'>
                <Button label='Log in' type='submit' disabled={isLoading} />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}

export default Login
