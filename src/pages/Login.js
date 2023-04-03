import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!email || !name) return;
    setUser({ name, email });
    navigate('/dashboard')
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>Login</div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            htmlFor="name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            htmlFor="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Login;
