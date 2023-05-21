class DataValidator {
    validationschecker =[];
  
    registerCheckedElement =(id, status)=>{
        let index = -1;
        let checked = this.validationschecker.find((el,i) =>{ 
            if(el.element === id){
                index = i;
                return i;
            }
        });
        if(index != -1){
           this.validationschecker[index].status = status;
           
        } else {
           this.validationschecker.push({element: id, status: status});
        }
        return checked;
    }
  
    elementvalidator =(id)=>{

        if(document.getElementById(id).dataset.kvaluetype ==='text'){
            let errorlabel = 'error-label-' + id;
            document.getElementById(id).style.borderColor = "red";
            let el = document.getElementById(id);
            if(el.value.trim().length != 0){
                let regex = "^[a-zA-Z ]*$";
                let hyphen_regex = "/^a-zA-Z0-9_-$/";
                let special_chars = new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
                if(el.value.match(regex) || el.value.match(hyphen_regex) || special_chars.test(el.value)){
                    document.getElementById(errorlabel).innerHTML = '';
                    document.getElementById(id).style.borderColor = 'transparent';
                    this.registerCheckedElement(id,'passed');
                   return;
                } else {
                    document.getElementById(errorlabel).innerHTML = 'Invalid input. Please enter text only';
                    document.getElementById(errorlabel).style.color = 'red';
                    this.registerCheckedElement(id,'failed');
                }
            }
            if(el.value.trim().length == 0 && el.required){
                document.getElementById(id).style.borderColor = 'red';
                document.getElementById(errorlabel).innerHTML = '*Required!';
                document.getElementById(errorlabel).style.color = 'red';
                this.registerCheckedElement(id,'failed');
            }
        }

        if(document.getElementById(id).dataset.kvaluetype ==='alphanumeric'){
            let errorlabel = 'error-label-' + id;
            document.getElementById(id).style.borderColor = "red";
            let el = document.getElementById(id);
            if(el.value.trim().length != 0){
                let myregex = new RegExp(/^[A-Za-z0-9\s]*$/);
                if(myregex.test(el.value)){
                    document.getElementById(errorlabel).innerHTML = '';
                    document.getElementById(id).style.borderColor = 'transparent';
                    this.registerCheckedElement(id,'passed');
                } else {
                    document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
                    document.getElementById(errorlabel).style.color = 'red';
                    this.registerCheckedElement(id,'failed');
                }
            }
            if(el.value.trim().length == 0 && el.required){
                document.getElementById(errorlabel).innerHTML = 'Required!';
                document.getElementById(errorlabel).style.color = 'red';
                this.registerCheckedElement(id,'failed');
                return;
            }
        }

        if(document.getElementById(id).dataset.kvaluetype.match(/phonenumber/)){
            let errorlabel = 'error-label-' + id;
            document.getElementById(id).style.borderColor = "red";
            let el = document.getElementById(id);
            if(el.value.trim().length != 0){
               let regex = "^[0]{1}[0-9]{9}$";
               if(el.value.match(regex)){
                 document.getElementById(errorlabel).innerHTML = '';
                 document.getElementById(id).style.borderColor = 'transparent';
                 this.registerCheckedElement(id,'passed');
               } else {
                 document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
                 document.getElementById(errorlabel).style.color = 'red';
                 this.registerCheckedElement(id,'failed');
               }
            }
            if(el.value.trim().length == 0 && el.required){
                document.getElementById(errorlabel).innerHTML = 'Required!';
                document.getElementById(errorlabel).style.color = 'red';
                this.registerCheckedElement(id,'failed');
                return;
            }
        }

        if(document.getElementById(id).dataset.kvaluetype.match(/email/)){
            let errorlabel = 'error-label-' + id;
            document.getElementById(id).style.borderColor = 'red';
            let el = document.getElementById(id);
            if(el.value.trim().length != 0){
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el.value)){
                  document.getElementById(errorlabel).innerHTML = '';
                  document.getElementById(id).style.borderColor = 'transparent';
                  this.registerCheckedElement(id,'passed');
                } else {
                  document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
                  document.getElementById(errorlabel).style.color = 'red';
                  this.registerCheckedElement(id,'failed');
                }
            }
            if(el.value.trim().length == 0 && el.required){
                document.getElementById(errorlabel).innerHTML = 'Required!';
                document.getElementById(errorlabel).style.color = 'red';
                this.registerCheckedElement(id,'failed');
                return;
            }
        }

        if(document.getElementById(id).dataset.kvaluetype ==='numeric'){
            let errorlabel = 'error-label-' + id;
            document.getElementById(id).style.borderColor = 'red';
            let el = document.getElementById(id);
            if(el.value.trim().length != 0){
                let regex = "^[0-9]+$";
                if(el.value.match(regex)){
                   document.getElementById(errorlabel).innerHTML = '';
                   document.getElementById(id).style.borderColor = 'transparent';
                   this.registerCheckedElement(id,'passed');
                   return;
                } else {
                   document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
                   document.getElementById(errorlabel).style.color = 'red';
                   this.registerCheckedElement(id,'failed');
                }
            }
            if(el.value.trim().length == 0 && el.required){
                document.getElementById(errorlabel).innerHTML = 'Required!';
                document.getElementById(errorlabel).style.color = 'red';
                this.registerCheckedElement(id,'failed');
                return;
            }
        }

        if(document.getElementById(id).dataset.kvaluetype === 'password'){
          let errorlabel = 'error-label-' + id;
          document.getElementById(id).style.borderColor = 'red';
          let el = document.getElementById(id);
          if(el.value.trim().length != 0){
              if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(el.value)){
                document.getElementById(errorlabel).innerHTML = '';
                document.getElementById(id).style.borderColor = 'transparent';
                this.registerCheckedElement(id,'passed');
              } else {
                  document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
                  document.getElementById(errorlabel).style.color = 'red';
                  this.registerCheckedElement(id,'failed');
              }
           }
           if(el.value.trim().length == 0 && el.required){
              document.getElementById(errorlabel).innerHTML = 'Required!';
              document.getElementById(errorlabel).style.color = 'red';
              this.registerCheckedElement(id,'failed');
              return;
            }
        }

        if(document.getElementById(id).dataset.kvaluetype === 'arbitrary'){
          let errorlabel = 'error-label-' + id;
          document.getElementById(id).style.borderColor = 'red';
          let el = document.getElementById(id);
          if(el.value.trim().length < 4 ){
              document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
              document.getElementById(errorlabel).style.color = 'red';
              this.registerCheckedElement(id,'failed');
          } else {
             document.getElementById(errorlabel).innerHTML = '';
             document.getElementById(id).style.borderColor = 'transparent';
             this.registerCheckedElement(id,'passed');
          }
        }
    }
  
    elementPrevalidate=(id)=>{
        if(id==='roledetail-modal-btn'){
             if(document.getElementById('user_role_detail').value.trim().length===0){
                this.elementvalidator('user_role_detail');
                return;
             } 
             if(document.getElementById('user_role_detail').value.trim().length < 8){
                this.flagErrorInputField('user_role_detail', 'Role details cannot be less than 8 characters in length');
             } else {
                 this.clearFlaggedInput('userrole');
                 $('#roledetail-modal').modal('hide');
                 document.getElementById('submitformBtn').removeAttribute('disabled');
                 return;
             }
        }
    }
  
    clearFormFields =()=>{
        this.validationschecker.forEach(el =>{
            document.getElementById(el.element).value = '';
        });
    }
  
    clearFlaggedInput=(id)=>{
      let errorlabel = 'error-label-' + id;
      document.getElementById(errorlabel).innerHTML = '';
      document.getElementById(id).style.borderColor = 'transparent';
      this.registerCheckedElement(id,'passed');
    }
  
    disposeValidationsObject =()=> this.validationschecker = [];
  
  
    setSelectBoxValue =(elem, index)=>{
        index = index.toString();
        let listbox = document.getElementById(elem);
        for (let i = 0; i < listbox.options.length; ++i) {
            if(listbox.options[i].value === index) listbox.options[i].selected = true;
        }
    }
  
    passwordMatchCheck =(passfield1,passfield2)=>{
        let inputfield1 = document.getElementById(passfield1).value;
        let inputfield2 = document.getElementById(passfield2).value;
        let el = document.getElementById(passfield2);
        let errorlabel = 'error-label-' + passfield2;
        if(inputfield1 === inputfield2){
           document.getElementById(errorlabel).innerHTML = '';
           document.getElementById(passfield2).style.borderColor = 'transparent';
           return;
        } else {
          document.getElementById(errorlabel).innerHTML = el.dataset.requiredError;
          document.getElementById(errorlabel).style.color = 'red';
          this.registerCheckedElement(passfield2,'failed');
          return;
        }
    }
  
    flagErrorInputField=(id, custom_msge=null)=>{
      let errorlabel = 'error-label-' + id;
      let err_msg = custom_msge === null? document.getElementById(id).dataset.requiredError: custom_msge; 
      document.getElementById(id).style.borderColor = 'red';
      document.getElementById(errorlabel).innerHTML = '';
      document.getElementById(errorlabel).innerHTML = '<h4 style="font-weight: bold;">* '+ err_msg +'</h4>';
      document.getElementById(errorlabel).style.color = 'red';
      this.registerCheckedElement(id,'failed');
    }
  
    flagfailedValidations=()=>{
        let failedItems = this.validationschecker.filter(r=>r.status === 'failed');
        for(let i = 0; i < failedItems.length; i ++){
           this.elementvalidator(failedItems[i].element);
           if(failedItems[i].element==='user_role_detail') 
           this.flagErrorInputField('userrole','Please add details for this Role &nbsp;&nbsp;&nbsp<a href="#" onclick="utils.checkSelectedValue(`userrole`);">(...click here)</a>');
        }
    }
    
}