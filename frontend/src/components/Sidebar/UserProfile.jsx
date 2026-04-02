const UserProfile = () => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {/* <img
        src="https://i.pravatar.cc/40"
        alt="avatar"
        className="w-10 h-10 rounded-lg"
      /> */}
      <div className="w-10 h-10 bg-gray-600 rounded-lg"></div>
      <div>
        <p className="text-sm font-medium">The Grandmaster</p>
        <p className="text-xs text-gray-400">ELO : 2450</p>
      </div>
    </div>
  );
};

export default UserProfile;