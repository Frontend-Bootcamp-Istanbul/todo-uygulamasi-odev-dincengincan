import React from 'react';
//onClick'te neden onClick={this.props.onRemoveAll} yapmadık? Böyle de çalışıyor. 

class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => {this.props.onRemoveAll()}}>
                Tümünü Sil
        </button>
    }
}

export default RemoveAll;
