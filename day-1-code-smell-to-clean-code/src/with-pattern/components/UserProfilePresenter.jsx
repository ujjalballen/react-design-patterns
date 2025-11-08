import ErrorMessage from "./common/ErrorMessage";
import LoadingSpinner from "./common/LoadingSpinner";

const UserProfilePresenter = ({ user, posts, loading, error, onRetry }) => {
  if (loading) {
    return <LoadingSpinner message={"Loading User Profile...."} />;
  }

  if (error) {
    return (
      <ErrorMessage title={"Opps, error"} message={error} onRetry={onRetry} />
    );
  }

  return <div></div>;
};

export default UserProfilePresenter;
