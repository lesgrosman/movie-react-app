import { ArrowLeftOnRectangleIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuth } from '@utils/hooks/useAuth'
import { useRouter } from 'next/router'

const Dropdown = () => {
  const { logout } = useAuth()
  const router = useRouter()

  const redirectToProfile = () => router.push('/profile')

  return (
    <div className=''>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button>
            <UserCircleIcon className='h-11 w-11 text-white' aria-hidden='true' />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='fixed z-50 right-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={redirectToProfile}
                    className={`${
                      active ? 'bg-primary-default text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <UserIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logout}
                    className={`${
                      active ? 'bg-primary-default text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <ArrowLeftOnRectangleIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown
