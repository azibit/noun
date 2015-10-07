/**
 * Created by azibit on 9/11/15.
 */

var React = require('react');
var InputField = require('./InputFieldComponent');
var DropDown = require('./DropDownComponent');
var TextArea = require('./TextArea');
var SwitchButton = require('./SwitchButton');
var FileUpload = require('./FileUpload');
var TestPhoto = require('./TestPhoto');

var religion = ["Christian", "Islam", "Other"];
var HomePage = React.createClass({

    render: function () {

       return (
           <div className = "container">

               <br/>
               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <InputField icon = "account_circle" type = "text" label = "First Name" name = "firstName"/>
                   </div>
               </div>

               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <InputField icon = "account_circle" type = "text" label = "Last Name" name = "lastName"/>
                   </div>
               </div>

               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <InputField icon = "account_circle" type = "text" label = "Student ID" name = "studentId"/>
                   </div>
               </div>

               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <InputField icon = "account_circle" type = "text" label = "Password" name = "password"/>
                   </div>
               </div>

               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <InputField icon = "account_circle" type = "text" label = "Retype Password" name = "re_password"/>
                   </div>
               </div>

               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <DropDown optionsList = {religion}>Faculty</DropDown>
                   </div>
               </div>

               <div className = "row">
                   <div  className = "col s12 offset-s3 grid-example">
                       <DropDown optionsList = {religion}>Department</DropDown>
                   </div>
               </div>

            </div>);
    }
});

module.exports = HomePage;