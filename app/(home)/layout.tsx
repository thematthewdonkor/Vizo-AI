const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full overflow-auto md:bg-[url(/images/gradient.png)] bg-accent-foreground bg-no-repeat bg-contain bg-bottom">
      <div className="mx-auto max-w-screen-xl w-full h-full">{children}</div>
    </div>
  );
};

export default HomeLayout;
