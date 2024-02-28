import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


const SigninForm = () => {
  return (
<div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
        <span className="login100-form-title">
          Sign In
        </span>
        <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
          <input className="input100" type="text" name="username" placeholder="Username" />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Please enter password">
          <input className="input100" type="password" name="pass" placeholder="Password" />
          <span className="focus-input100" />
        </div>
        <div className="text-right p-t-13 p-b-23">
          <span className="txt1">
            Forgot
          </span>
          <a href="#" className="txt2">
            Username / Password?
          </a>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">
            Sign in
          </button>
        </div>
        <div className="flex-col-c p-t-170 p-b-40">
          <span className="txt1 p-b-9">
            Don’t have an account?
          </span>
          <a href="#" className="txt3">
            Sign up now
          </a>
        </div>
      </form>
    </div>
  </div>
</div>
)
}
export default SigninForm

// const SigninForm = () => {
//   return (
//     <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//   )
// }

// export default SigninForm;




