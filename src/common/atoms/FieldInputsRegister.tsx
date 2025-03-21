const FieldInputsRegister = ({
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
}: any) => {
  return (
    <>
      <fieldset className="flex flex-col">
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="enter you're username"
          // Size="lg"
          // onChange={handleChange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter you're email"
          // Size="lg"
          // onChange={handleChange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter you're password"
          // Size="lg"
          // onChange={handleChange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="confirm_password">confirm password</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="enter you're confirm password"
          // Size="lg"
          // onChange={handleChange}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
      </fieldset>
    </>
  );
};

export default FieldInputsRegister;
