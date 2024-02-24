const DrinksLayout = ({ children }: any) => {
  return (
    <div className="max-w-xl m-16">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial </code>
        </pre>
      </div>
      {children}
    </div>
  );
};
export default DrinksLayout;
