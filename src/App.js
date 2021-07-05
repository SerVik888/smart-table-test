import React from 'react';
import './App.css';
import Table from './Table/Table';


const App = () => {
  return (
    <div className="appWrapper">
            {/* <SearchBar filterTable={props.filterTable}/> */}
            <Table
            // data={props.data}
            //        sortMethod={props.sortMethod}
            //        reverseToggler={props.reverseToggler}
            //        searchQuery={props.searchQuery}
            //        sortTable={props.sortTable}
            //        toggleModal={props.toggleModal}
            //        getData={props.getData}
                   />
        </div>
  );
}

export default App;
