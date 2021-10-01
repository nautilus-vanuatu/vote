import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import { authSelector } from '@monorepo-vote/redux-store/src/slices/auth.slice';

export default function withAuth<P>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  const Wrapper = (props: P): JSX.Element => {
    const router = useRouter();

    const { token } = useSelector(authSelector);

    useEffect(() => {
      if (!token) {
        router.replace('/login');
      }
    }, [token, router]);
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}
