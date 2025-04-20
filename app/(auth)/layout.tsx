const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-accent-foreground flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
