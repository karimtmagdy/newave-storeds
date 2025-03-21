import { useAuth } from "@/context/AuthContext";

const UserMenuInformation = () => {
  const { user } = useAuth();
  return (
    <div className="user-menu-inormation">
      <div className="user-avatar">
        <img
          src={user?.photo.url}
          alt={`avatar-${user?.username}`}
          className="h-full w-full shrink-0"
        />
      </div>
      <div className="user-title">
        <strong>{user?.username}</strong>
        <small>{user?.email}</small>
      </div>
      <span />
    </div>
  );
};
export default UserMenuInformation;
