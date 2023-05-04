const WithoutClassname = ({ highlighted, theme }) => (
  <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}>
    without classnames
    <br/>
    variable highlighted : {highlighted}
    <br/>
    variable theme : {theme}
  </div>
);

export default WithoutClassname;
