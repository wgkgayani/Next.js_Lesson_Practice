export default function AboutLayout({ children }) {
  return (
    <div>
      <div className="row">
        <h1>About Header</h1>
      </div>
      {children}
      <div className="row">
        <h1>About Footer</h1>
      </div>
    </div>
  );
}
