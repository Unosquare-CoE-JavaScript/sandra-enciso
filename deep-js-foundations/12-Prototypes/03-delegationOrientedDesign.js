/* */

/* Delegation: Design Pattern */
/*
The delegation design pattern allows an object to delegate one or more tasks to a helper object. 
Two classes are used to achieve this; the delegate and delegator, both which realise a common interface. 
A method (or methods) on the interface represent the functionality to be delegated. 
A call to the delegator calls the matching function on the delegate.

Composition Tru Inheritance.
Composition Over Inheritance
Mixin Composition
Delegation (Dynamic Composition)
Delegation-Oriented Design
*/

/* Delegation Oriented Design*/

var AuthController = {
    authenticate() {
      server.authenticate(
        [this.username, this.password],
        this.handleResponse.bind(this)
      );
    },
    handleResponse(res){
      if(!res.ok) this.displayError(resp.msg);
    }
  };
  
  var LoginFormController =
      Object.assign(Object.create(AuthController), {
        onSubmit(){
          this.username = this.$username.val();
          this.password = this.$password.val();
          this.authenticate();
        },
        displayError(msg){
          alert(msg);
        }
      });