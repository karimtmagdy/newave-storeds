const FieldInputsLogin = ({ setEmail, setPassword }: any) => {
  return (
    <>
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
    </>
  );
};

export default FieldInputsLogin;
