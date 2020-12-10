import React from 'react';
import {connect} from 'react-redux';
const AllCountries = (props)=>{
    var { countries } = props;
    return(
        <div class="container">
            <h3>Countries Here</h3>
            <div class="row">
            <div class="card-deck">
                {
                    countries.map((c,i)=>{
                        return(
                            
                                <div class="col-3" key={i}>
                                    <div class="card">
                                        <div class="card-body text-center">
                                        <img class="card-img-top" src={c.flag} alt="Card"/>
                                        <div class="card-body">
                                            <h4 class="card-title">{c.name}</h4>
                                            <p class="card-text">{c.subregion}</p>
                                            <button>See Profile</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default connect(store=>store)(AllCountries)

