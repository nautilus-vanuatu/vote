import withAuth from '../utils/withAuth';

function PrivateClient(): JSX.Element {
  return <div>Private Client</div>;
}

export default withAuth(PrivateClient);
