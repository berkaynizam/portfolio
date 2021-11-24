import * as React from 'react';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
} from 'kbar';
import { useRouter } from 'next/router';
import KbarItem from './KbarItem';
import Kbd from './Kbd';
import { useTheme } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export default function Kbar({ children }: Props) {
  const { push } = useRouter();
  const { setTheme } = useTheme();

  const actions = [
    {
      id: 'home',
      name: 'Anasayfa',
      shortcut: [],
      keywords: '',
      perform: () => push('/'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: 'photos',
      name: 'Fotoğraflar',
      shortcut: [],
      keywords: '',
      perform: () => push('/photos'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    }
  ];

  return (
    <KBarProvider
      actions={actions}
      options={{
        animations: {
          enterMs: 200,
          exitMs: 100,
        },
      }}
    >
      <KBarPortal>
        <KBarPositioner
          className="bg-white bg-opacity-80
          dark:bg-black dark:bg-opacity-80"
        >
          <KBarAnimator className="w-full max-w-[440px] mt-6">
            <div
              className="bg-white p-4 rounded-lg shadow-2xl
              dark:bg-gray-900"
            >
              {/* SEARCH */}
              <div className="relative">
                <KBarSearch
                  className="w-full block border-0 text-lg p-3 focus:outline-none bg-transparent"
                  placeholder="Ne aramıştın?"
                />
                <Kbd className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  ESC
                </Kbd>
              </div>

              {/* RESULT */}
              <KBarResults
                className="border-0 border-t border-solid border-gray-200 pt-4 mt-2
                dark:border-gray-800"
                onRender={(actions, handlers, state) => (
                  <KbarItem action={actions} handlers={handlers} state={state} />
                )}
              />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  );
}