import React from 'react';


const PaginationList = props => {
    if (props.count <= 10) {
      return null;
    }
  
    const range = [];
    for (let i = 0; i < Math.ceil(props.count / 10); ++i) {
      range.push(i);
    }
  
    const changePage = page => {
      props.setPage(page);
    };
  
    return (
      <ul className="pagination">
            {
            range.map(v => {
              const isCurrent = v === props.currentPage;
              const onClick = ev => {
                ev.preventDefault();
                changePage(v);
              };
              return (
                <li
                  className={ isCurrent ? 'page-item active' : 'page-item' }
                  onClick={onClick}
                  key={v.toString()}>
  
                  <a className="page-link" href="">{v + 1}</a>
  
                </li>
              );
            })
          }
  
        </ul>
      
    );
  };
  
  export default PaginationList;