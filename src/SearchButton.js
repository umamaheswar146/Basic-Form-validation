import React, { Component } from 'react';
import './App.css';
 class SearchButton extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            number:'',
            FormErrors:{
                number:''
            }
        }
      }
      handleUserInput =(e)=>{
        let FormErrors = this.state.FormErrors;
        this.setState({FormErrors,[e.target.name]: e.target.value});
        switch(e.target.name){
             case 'number':FormErrors.number= e.target.value >100? 'Maximum Amount Is 100 ':'';
             break;
             default:
              break;
          }
      }
    render() {
        const {FormErrors}=this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                   <label htmlFor='number'>Enter Amount</label>
                   <input type='text' onChange={this.handleUserInput} name='number' className={FormErrors.number.length>0 ?'form-control error':'form-control'}/>
                   <br/>
                   {FormErrors.number.length>0 && (
                    <span className='text-danger'>{FormErrors.number}</span>
                    )}
               </div>
               <input type="submit"  className="btn btn-primary btn-block" value="Submit" />
                </form>
               
            </div>
        )
    }
}
export default SearchButton