import React, { Component } from 'react'
import _ from 'lodash';
export default class Pagination extends Component {
    
  
    render() {
        const {totalCount,pageSize,currentPage}=this.props;
        const pageCount=Math.ceil(totalCount/pageSize);
        const pages=_.range(1,pageCount+1);

        
        return (
            <div className="container" >
               <nav aria-label="Page navigation example" style={{width:'100%',display:'flex',justifyContent:'center'}}>
                <ul className="pagination">
                   {  pages.map(pageNumber=><li key={pageNumber} className={pageNumber===currentPage?"page-item active":"page-item"}><a className="page-link" href="#" onClick={()=> this.props.handlePage(pageNumber)} >{pageNumber}</a></li>
            )}
                </ul>
                </nav> 
            </div>
        )
    }
}
