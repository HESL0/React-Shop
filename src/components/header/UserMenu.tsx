const UserMenu = () => {
    return (
      <div className="flex items-center justify-center rounded-full border-2 font-bold border-slate-950 w-36 h-7 p-2">
        <a href="/" className="flex items-center">
          <span className="text-sm">Sign In</span>
          <span className="text-sm ml-2">|</span>
          <span className="text-sm ml-2">Sign Up</span>
        </a>
      </div>
    );
  };
  
  export default UserMenu;
  