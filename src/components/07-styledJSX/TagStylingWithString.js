function TagStylingWithString () {
  const name = 'React';
  const style = `
    background-color: 'black';
    color: 'aqua';
    font-size: '48px';
    font-weight: 'bold';
    padding: 16;
  `;
  return <div style={style}>{name}</div>
}

export default TagStylingWithString;
